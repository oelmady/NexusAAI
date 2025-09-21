import { useEffect, useMemo, useState } from 'react';
import { parseCaseStudies, type CaseStudy } from '../utils/markdownParser';
import SEO from '../components/SEO';
import { ContactSection } from '../components/contact';
import { useLocation, useNavigate } from 'react-router-dom';
import { analytics } from '../utils/analytics';

// @ts-ignore
import caseStudiesMd from '../../case-study-library.md?raw';

type Filters = {
    classification: 'all' | 'success' | 'failure';
    industry: 'all' | string;
};

const CaseCard = ({ item, onOpen }: { item: CaseStudy; onOpen: () => void }) => (
    <div className="bg-white rounded-lg shadow-sm border p-5 h-full flex flex-col">
        <div className="text-sm text-gray-500 mb-2">{item.classification === 'success' ? '✅ Success' : '⚠️ Failure'}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{item.company || item.partner ? `${item.company ?? ''}${item.partner ? ' • ' + item.partner : ''}` : 'Case Study'}</p>
        <div className="mt-auto">
            <button onClick={onOpen} className="text-primary-600 hover:text-primary-700 font-medium">View details →</button>
        </div>
    </div>
);

const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
            <div className="relative bg-white max-w-3xl w-full mx-4 rounded-lg shadow-lg border p-6 overflow-y-auto max-h-[80vh]">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" aria-label="Close">
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default function CaseStudyLibraryPage() {
    const all = useMemo(() => parseCaseStudies(caseStudiesMd as string), []);
    const location = useLocation();
    const navigate = useNavigate();
    const [filters, setFilters] = useState<Filters>(() => {
        const params = new URLSearchParams(location.search);
        const stored = typeof window !== 'undefined' ? window.localStorage.getItem('cs_filters') : null;
        const initial: Filters = stored ? JSON.parse(stored) : { classification: 'all', industry: 'all' };
        const pClass = (params.get('classification') as Filters['classification']) || initial.classification;
        const pInd = (params.get('industry') as string) || initial.industry;
        return { classification: (['all', 'success', 'failure'] as const).includes(pClass) ? pClass : 'all', industry: pInd || 'all' };
    });
    const [active, setActive] = useState<CaseStudy | null>(null);

    const industries = useMemo(() => {
        const base = ['Healthcare', 'Manufacturing', 'Education', 'Retail'];
        const set = new Set<string>(base);
        all.forEach((c) => c.industry && set.add(c.industry));
        return Array.from(set);
    }, [all]);

    const matchesIndustry = (c: CaseStudy, ind: string) => {
        if (ind === 'all') return true;
        if (c.industry && c.industry.toLowerCase() === ind.toLowerCase()) return true;
        const title = c.title.toLowerCase();
        const txt = `${c.problem ?? ''} ${c.solution ?? ''}`.toLowerCase();
        if (/healthcare/i.test(ind)) return /hospital|patient|clinical|health|medical|hipaa|ehr/.test(title) || /hipaa|ehr|patient|clinical/.test(txt);
        if (/manufacturing/i.test(ind)) return /manufactur|factory|quality|maintenance|supply/.test(title) || /predictive|quality|cmms|supply/.test(txt);
        if (/education/i.test(ind)) return /education|student|university|school|learning/.test(title) || /lms|student|grading|learning/.test(txt);
        if (/retail/i.test(ind)) return /retail|e-?commerce|customer|store|shopping/.test(title) || /personaliz|recommend|omnichannel/.test(txt);
        return false;
    };

    const filtered = all.filter((c) =>
        (filters.classification === 'all' || c.classification === filters.classification) &&
        matchesIndustry(c, filters.industry)
    );

    // Sync URL and localStorage when filters change
    useEffect(() => {
        const params = new URLSearchParams();
        if (filters.classification !== 'all') params.set('classification', filters.classification);
        if (filters.industry !== 'all') params.set('industry', filters.industry);
        navigate({ search: params.toString() }, { replace: true });
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('cs_filters', JSON.stringify(filters));
        }
    }, [filters, navigate]);

    useEffect(() => {
        analytics.caseFilterChange({ classification: filters.classification, industry: filters.industry });
    }, [filters]);

    return (
        <div className="min-h-screen">
            <SEO
                title="AI Automation Case Studies | Failures and Successes"
                description="Interactive case study library covering high-profile failures and standout successes with FAST Framework analysis."
                keywords="AI case studies, AI failures, AI successes, FAST Framework, ROI, lessons learned"
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Strategic Case Study Library</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">Learn exactly what works—and what fails—in real AI automation programs.</p>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center">
                    <div className="flex gap-2">
                        {(['all', 'success', 'failure'] as const).map((v) => (
                            <button
                                key={v}
                                onClick={() => setFilters((f) => ({ ...f, classification: v }))}
                                className={`px-3 py-1.5 rounded-lg border text-sm ${filters.classification === v ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                            >
                                {v === 'all' ? 'All' : v === 'success' ? 'Successes' : 'Failures'}
                            </button>
                        ))}
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <label className="text-sm text-gray-600" htmlFor="industry">Industry</label>
                        <select
                            id="industry"
                            className="px-3 py-1.5 rounded-lg border text-sm"
                            value={filters.industry}
                            onChange={(e) => setFilters((f) => ({ ...f, industry: e.target.value }))}
                        >
                            <option value="all">All</option>
                            {industries.map((i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((c, idx) => (
                            <CaseCard key={idx} item={c} onOpen={() => { analytics.caseModalOpen(c.title, c.classification); setActive(c); }} />)
                        )}
                    </div>
                </div>
            </section>

            {/* Failures Spotlight */}
            <section className="py-12 bg-yellow-50 border-t border-b border-yellow-200">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-yellow-900 mb-3">Learn from Failures</h2>
                    <p className="text-yellow-800">Avoid common pitfalls: misunderstood problems, poor data quality, and lack of validation. Use our failure prevention checklist before every deployment.</p>
                    <ul className="list-disc ml-6 mt-3 text-yellow-900">
                        <li>Validate problem using FAST Framework (F-A-S-T)</li>
                        <li>Run pilot with real-world conditions and error handling</li>
                        <li>Establish legal/compliance review for customer-facing AI</li>
                        <li>Set measurable success criteria and monitoring</li>
                    </ul>
                </div>
            </section>

            {/* Lead Capture */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <ContactSection variant="centered" />
                </div>
            </section>

            {/* Modal */}
            <Modal open={!!active} onClose={() => setActive(null)}>
                {active && (
                    <div className="space-y-4">
                        <div className="text-sm text-gray-500">{active.classification === 'success' ? '✅ Success' : '⚠️ Failure'}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{active.title}</h3>
                        {(active.company || active.partner) && (
                            <div className="text-sm text-gray-600">{[active.company, active.partner].filter(Boolean).join(' • ')}</div>
                        )}
                        {active.problem && (
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Problem / Context</h4>
                                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: active.problem.replace(/\n/g, '<br/>') }} />
                            </div>
                        )}
                        {active.solution && (
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: active.solution.replace(/\n/g, '<br/>') }} />
                            </div>
                        )}
                        {active.fast && (
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">FAST Framework Analysis</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    {(['F', 'A', 'S', 'T'] as const).map((k) => (
                                        <div key={k} className="bg-gray-50 rounded-md p-3 border">
                                            <div className="font-medium mb-1">{k}</div>
                                            <ul className="list-disc ml-5 text-gray-700">
                                                {(active.fast?.[k] || []).map((x, i) => <li key={i}>{x}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {active.results && (
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Results</h4>
                                <ul className="list-disc ml-5 text-sm text-gray-700">
                                    {active.results.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </div>
                        )}
                        {active.lessons && (
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Key Lessons</h4>
                                <ul className="list-disc ml-5 text-sm text-gray-700">
                                    {active.lessons.map((l, i) => <li key={i}>{l}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
}
