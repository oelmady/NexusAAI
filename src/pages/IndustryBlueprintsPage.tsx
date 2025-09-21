import { useEffect, useMemo, useState } from 'react';
import { parseBlueprints, parseCaseStudies, type Blueprint } from '../utils/markdownParser';
import SEO from '../components/SEO';
import { ContactSection } from '../components/contact';
import Modal from '../components/ui/Modal';
import ROICalculator from '../components/ROICalculator';

// We will import raw markdown at build time via Vite's raw import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import blueprintsMd from '../../industry-blueprints.md?raw';
// @ts-ignore
import caseStudiesMd from '../../case-study-library.md?raw';

const industries: Array<{ key: Blueprint['industry']; label: string; icon: string }> = [
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { key: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { key: 'education', label: 'Education', icon: '🎓' },
    { key: 'retail', label: 'Retail', icon: '🛍️' },
];

const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-full bg-gray-200 rounded-full h-3" aria-label="progress">
        <div className="bg-primary-600 h-3 rounded-full transition-all" style={{ width: `${value}%` }} />
    </div>
);

export default function IndustryBlueprintsPage() {
    const [activeIndustry, setActiveIndustry] = useState<Blueprint['industry']>('healthcare');
    const data = useMemo(() => parseBlueprints(blueprintsMd as string), []);
    const studies = useMemo(() => parseCaseStudies(caseStudiesMd as string), []);
    const current = data.find((b) => b.industry === activeIndustry);
    const [roiOpen, setRoiOpen] = useState(false);

    useEffect(() => {
        if (!current && data.length) setActiveIndustry(data[0].industry);
    }, [current, data]);

    const getIndustryLabel = (key: string) => industries.find((i) => i.key === key)?.label ?? 'Industry';
    const roiDefaultsFor = (key: string) => {
        switch (key) {
            case 'healthcare':
                return { currentManualHours: 25, hourlyRate: 60, automationEfficiency: 0.7, implementationCost: 15000, monthlyToolCost: 1000 };
            case 'manufacturing':
                return { currentManualHours: 30, hourlyRate: 55, automationEfficiency: 0.75, implementationCost: 50000, monthlyToolCost: 3000 };
            case 'education':
                return { currentManualHours: 20, hourlyRate: 40, automationEfficiency: 0.65, implementationCost: 12000, monthlyToolCost: 800 };
            case 'retail':
                return { currentManualHours: 22, hourlyRate: 35, automationEfficiency: 0.6, implementationCost: 10000, monthlyToolCost: 600 };
            default:
                return {};
        }
    };

    return (
        <div className="min-h-screen">
            <SEO
                title="Industry AI Automation Blueprints | Healthcare, Manufacturing, Education, Retail"
                description="Interactive, research-backed AI automation blueprints by industry. Compliance, ROI, timelines, and risk mitigation—built for execution."
                keywords="AI automation blueprint, industry-specific AI implementation, HIPAA, Industry 4.0, education AI, retail personalization"
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industry AI Automation Blueprints</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Proven, compliant implementation plans—complete with timelines, ROI expectations, and risk mitigation.
                    </p>
                </div>
            </section>

            {/* Industry Tabs */}
            <section className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap gap-3 py-4">
                        {industries.map((i) => (
                            <button
                                key={i.key}
                                onClick={() => setActiveIndustry(i.key)}
                                className={`px-4 py-2 rounded-lg border transition-colors ${activeIndustry === i.key ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                                    }`}
                                aria-pressed={activeIndustry === i.key}
                            >
                                <span className="mr-2" aria-hidden>
                                    {i.icon}
                                </span>
                                {i.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blueprint Viewer */}
            <section className="py-10">
                <div className="max-w-6xl mx-auto px-4">
                    {!current ? (
                        <div className="text-center text-gray-600">Loading blueprint…</div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Sections */}
                            <div className="lg:col-span-2 space-y-6">
                                {current.sections.map((s, idx) => (
                                    <div key={idx} className="bg-white rounded-lg shadow-sm border p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                                            {/* Simple progress estimate based on position */}
                                            <div className="w-40">
                                                <ProgressBar value={Math.round(((idx + 1) / current.sections.length) * 100)} />
                                            </div>
                                        </div>
                                        {s.bullets && s.bullets.length > 0 ? (
                                            <ul className="list-disc ml-5 text-gray-700 space-y-1">
                                                {s.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700 whitespace-pre-wrap">{s.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar: ROI, Timeline, Compliance, Downloads */}
                            <aside className="space-y-6">
                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Estimated ROI</h4>
                                    {current.roi?.metrics ? (
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {Object.entries(current.roi.metrics).map(([k, v]) => (
                                                <li key={k} className="flex items-center justify-between">
                                                    <span className="capitalize">{k.replace(/-/g, ' ')}</span>
                                                    <span className="font-medium text-primary-700">{String(v)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-600">ROI details available in the full blueprint.</p>
                                    )}
                                    <button
                                        onClick={() => setRoiOpen(true)}
                                        className="mt-4 inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-primary-600 text-white hover:bg-primary-700 text-sm"
                                    >
                                        🧮 Open ROI Calculator
                                    </button>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Implementation Timeline</h4>
                                    {current.timeline.length ? (
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            {current.timeline.map((t, i) => (
                                                <li key={i}>
                                                    {t.phase && <div className="font-medium text-gray-900">{t.phase}</div>}
                                                    <ul className="list-disc ml-5">
                                                        {t.items.map((it, j) => (
                                                            <li key={j}>{it}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-600">See detailed week-by-week plan in the download.</p>
                                    )}
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Compliance Checklist</h4>
                                    {current.compliance.length ? (
                                        <div className="space-y-3">
                                            {current.compliance.map((c, i) => (
                                                <div key={i}>
                                                    <div className="font-medium text-gray-900">{c.title}</div>
                                                    <ul className="list-disc ml-5 text-sm text-gray-700">
                                                        {c.points.map((p, j) => (
                                                            <li key={j}>{p}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-600">Industry-specific compliance items will appear here.</p>
                                    )}
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Download Checklist</h4>
                                    <p className="text-sm text-gray-600 mb-3">Get the full implementation checklist as a PDF.</p>
                                    <button
                                        onClick={() => {
                                            if (!current) return;
                                            const lines: string[] = [];
                                            lines.push(`# ${industries.find(i => i.key === current.industry)?.label} AI Implementation Checklist`);
                                            lines.push('');
                                            lines.push('## Sections');
                                            current.sections.forEach((s, i) => {
                                                lines.push(`${i + 1}. ${s.title}`);
                                                (s.bullets || []).forEach(b => lines.push(`   - ${b}`));
                                            });
                                            if (current.timeline.length) {
                                                lines.push('', '## Timeline');
                                                current.timeline.forEach(t => {
                                                    if (t.phase) lines.push(`- ${t.phase}`);
                                                    t.items.forEach(it => lines.push(`   - ${it}`));
                                                });
                                            }
                                            if (current.compliance.length) {
                                                lines.push('', '## Compliance');
                                                current.compliance.forEach(c => {
                                                    lines.push(`- ${c.title}`);
                                                    c.points.forEach(p => lines.push(`   - ${p}`));
                                                });
                                            }
                                            const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
                                            const url = URL.createObjectURL(blob);
                                            const a = document.createElement('a');
                                            a.href = url;
                                            a.download = `${current.industry}-ai-blueprint-checklist.txt`;
                                            document.body.appendChild(a);
                                            a.click();
                                            a.remove();
                                            URL.revokeObjectURL(url);
                                        }}
                                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition"
                                        aria-label="Download implementation checklist"
                                    >
                                        ⬇️ Download (.txt)
                                    </button>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready for a Custom Plan?</h4>
                                    <p className="text-sm text-gray-600 mb-4">Book a free consultation and get a tailored blueprint for your organization.</p>
                                    <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50 transition">
                                        📅 Book Consultation
                                    </a>
                                </div>

                                {/* Related Case Studies */}
                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Related Case Studies</h4>
                                    <ul className="space-y-2 text-sm">
                                        {studies
                                            .filter(s => {
                                                const key = activeIndustry;
                                                const title = s.title.toLowerCase();
                                                const txt = `${s.problem ?? ''} ${s.solution ?? ''}`.toLowerCase();
                                                if (key === 'healthcare') return /hospital|patient|clinical|health|medical/.test(title) || /hipaa|ehr|patient|clinical/.test(txt);
                                                if (key === 'manufacturing') return /manufactur|factory|quality|maintenance|supply/.test(title) || /predictive|quality|cmms|supply/.test(txt);
                                                if (key === 'education') return /education|student|university|school|learning/.test(title) || /lms|student|grading|learning/.test(txt);
                                                if (key === 'retail') return /retail|e-?commerce|customer|store/.test(title) || /personaliz|recommend|omnichannel/.test(txt);
                                                return false;
                                            })
                                            .slice(0, 3)
                                            .map((s, i) => (
                                                <li key={i} className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <div className="font-medium text-gray-900 line-clamp-2">{s.title}</div>
                                                        <div className="text-gray-600">{s.classification === 'success' ? 'Success' : 'Failure'}</div>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                    <a
                                        href={`#/case-studies?industry=${encodeURIComponent(getIndustryLabel(activeIndustry))}`}
                                        className="inline-flex items-center justify-center mt-3 px-3 py-1.5 rounded-md border border-primary-600 text-primary-600 hover:bg-primary-50 text-sm"
                                    >
                                        View all related →
                                    </a>
                                </div>
                            </aside>
                        </div>
                    )}
                </div>
            </section>

            {/* Lead Capture */}
            <section id="contact" className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <ContactSection variant="centered" />
                </div>
            </section>

            {/* ROI Modal */}
            <Modal isOpen={roiOpen} onClose={() => setRoiOpen(false)} title="ROI Calculator" size="xl">
                <ROICalculator title={`🧮 ${getIndustryLabel(activeIndustry)} ROI Calculator`} defaults={roiDefaultsFor(activeIndustry)} />
            </Modal>
        </div>
    );
}

