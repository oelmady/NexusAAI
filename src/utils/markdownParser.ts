// Lightweight markdown parsing tailored to the structure of provided docs
// Avoids heavy deps; can be swapped later with gray-matter/remark if needed

export type TimelineItem = { week?: string; phase?: string; items: string[] };
export type ComplianceItem = { title: string; points: string[] };
export type ROIData = { summary?: string; metrics?: Record<string, string | number> };

export type Section = {
    title: string;
    content: string;
    bullets?: string[];
};

export type Blueprint = {
    industry: 'healthcare' | 'manufacturing' | 'education' | 'retail' | string;
    sections: Section[];
    timeline: TimelineItem[];
    compliance: ComplianceItem[];
    roi: ROIData;
    risks?: string[];
};

export type CaseStudy = {
    title: string;
    company?: string;
    partner?: string;
    industry?: string;
    classification: 'success' | 'failure';
    problem?: string;
    solution?: string;
    fast?: { F?: string[]; A?: string[]; S?: string[]; T?: string[] };
    results?: string[];
    lessons?: string[];
    impact?: Record<string, string>;
    quotes?: string[];
};

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function parseBlueprints(md: string): Blueprint[] {
    const text = md; // keep full for regex matches per section
    const industries: Array<{ key: Blueprint['industry']; heading: string }> = [
        { key: 'healthcare', heading: 'HEALTHCARE AI AUTOMATION BLUEPRINT' },
        { key: 'manufacturing', heading: 'MANUFACTURING AI AUTOMATION BLUEPRINT' },
        { key: 'education', heading: 'EDUCATION AI AUTOMATION BLUEPRINT' },
        { key: 'retail', heading: 'RETAIL AI AUTOMATION BLUEPRINT' },
    ];

    const out: Blueprint[] = [];

    for (const ind of industries) {
        const secRe = new RegExp(`##\\s*\\*\\*${ind.heading.replace(/[.*+?^${}()|[\\]\\\\]/g, r => r)}\\*\\*\\s*([\\s\\S]*?)(?=\\n##\\s*\\*\\*|$)`, 'i');
        const match = text.match(secRe);
        if (!match) continue;
        const block = match[1];

        // Extract compliance bullets under headings like HIPAA / requirements
        const compliance: ComplianceItem[] = [];
        const compSections = block.match(/####\s*\*\*[^\n]+\*\*[\s\S]*?(?=\n###|$)/g) || [];
        for (const cs of compSections) {
            const titleMatch = cs.match(/####\s*\*\*([^\n]+)\*\*/);
            const title = titleMatch ? titleMatch[1].trim() : 'Compliance';
            const points = (cs.match(/^-\s+.+$/gm) || []).map((l) => l.replace(/^-[\s]*/, '').trim());
            if (points.length) compliance.push({ title, points });
        }

        // Extract timelines marked by "Implementation Timeline" or Phases checklists
        const timeline: TimelineItem[] = [];
        const timeBlocks = block.match(/Implementation Timeline:[\s\S]*?(?=\n###|$)/i);
        if (timeBlocks) {
            const weeks = (timeBlocks[0].match(/-\s*Week\s*[^:]+:\s*[^\n]+/gi) || []).map((l) => l.replace(/^-[\s]*/, ''));
            if (weeks.length) timeline.push({ items: weeks });
        }
        const phases = block.match(/####\s*\*\*Phase[^\n]+\*\*[\s\S]*?(?=\n###|$)/g) || [];
        for (const ph of phases) {
            const title = (ph.match(/####\s*\*\*([^\n]+)\*\*/) || [])[1];
            const items = (ph.match(/^-\s*\[ \]\s*.+$/gm) || []).map((l) => l.replace(/^-\s*\[ \]\s*/, '').trim());
            if (items.length) timeline.push({ phase: title, items });
        }

        // ROI & risks snapshot from Business Impact / Impact sections
        const roi: ROIData = { summary: '' };
        const impactBlock = block.match(/\*\*Business Impact:\*\*[\s\S]*?(?=\n###|$)/i);
        if (impactBlock) {
            const lines = impactBlock[0].match(/^-\s+\*\*([^:]+):\*\*\s*([^\n]+)/gm) || [];
            roi.metrics = Object.fromEntries(lines.map((l) => {
                const m = l.match(/^-\s+\*\*([^:]+):\*\*\s*([^\n]+)/);
                return m ? [toSlug(m[1]), m[2].trim()] : ['metric', l];
            }));
        }

        // Sections: capture high-value applications headings under ### and their bullets
        const sections: Section[] = [];
        const appBlocks = block.match(/####\s*\*\*\d+\.\s+[^\n]+\*\*[\s\S]*?(?=\n####|\n###|$)/g) || [];
        for (const ab of appBlocks) {
            const t = (ab.match(/\*\*\d+\.\s+([^*]+)\*\*/) || [])[1]?.trim() || 'Application';
            const bullets = (ab.match(/^-\s+\*\*[^\n]+\*\*[^\n]*/gm) || []).map((l) => l.replace(/^-[\s]*/, ''));
            sections.push({ title: t, content: ab, bullets });
        }

        // Risks
        const risks: string[] = [];
        const riskBlock = block.match(/###\s*\*\*Risk Mitigation Strategies\*\*[\s\S]*?(?=\n###|$)/i);
        if (riskBlock) {
            const pts = riskBlock[0].match(/^-\s+\*\*[^:]+:\*\*\s*.+$/gm) || [];
            pts.forEach((p) => risks.push(p.replace(/^-[\s]*/, '')));
        }

        out.push({ industry: ind.key, sections, timeline, compliance, roi, risks });
    }
    return out;
}

export function parseCaseStudies(md: string): CaseStudy[] {
    const items: CaseStudy[] = [];
    const failureBlocks = md.split(/##\s*\*\*FAILURE CASE STUDIES\*\*/i)[1]?.split(/##\s*\*\*SUCCESS CASE STUDIES\*\*/i)[0] || '';
    const successBlocks = md.split(/##\s*\*\*SUCCESS CASE STUDIES\*\*/i)[1] || '';

    const parseBlockGroup = (group: string, classification: 'success' | 'failure') => {
        const cases = group.match(/###\s*\*\*Case Study[^\n]+\*\*[\s\S]*?(?=\n###\s*\*\*Case Study|$)/g) || [];
        for (const c of cases) {
            const title = (c.match(/###\s*\*\*([^\n]+)\*\*/) || [])[1]?.trim() || 'Case Study';
            const company = (c.match(/\*\*Company:\*\*\s*([^\n]+)/) || [])[1];
            const partner = (c.match(/\*\*Partner:\*\*\s*([^\n]+)/) || [])[1];
            const industry = undefined; // often implicit; could infer later
            const problem = (c.match(/####\s*\*\*The (Failure|Challenge|Implementation)\*\*[\s\S]*?(?=\n####|$)/i) || [])[0];
            const solution = (c.match(/####\s*\*\*The Solution\*\*[\s\S]*?(?=\n####|$)/i) || [])[0];
            const results = (c.match(/####\s*\*\*(Measurable Results|Outstanding Results)\*\*[\s\S]*?(?=\n####|$)/i) || [])[0]?.match(/^-\s+.+$/gm)?.map((l) => l.replace(/^-[\s]*/, ''));
            const lessons = (c.match(/####\s*\*\*Lessons Learned\*\*[\s\S]*?(?=\n####|$)/i) || [])[0]?.match(/^[0-9]+\.\s+.+$/gm)?.map((l) => l.replace(/^[0-9]+\.\s*/, ''));
            const fast = {
                F: (c.match(/\*\*F\s*-\s*[^\n]+\*\*[\s\S]*?(?=\n\*\*|$)/i) || [''])[0].match(/^-\s+.+$/gm)?.map(l => l.replace(/^-[\s]*/, '')),
                A: (c.match(/\*\*A\s*-\s*[^\n]+\*\*[\s\S]*?(?=\n\*\*|$)/i) || [''])[0].match(/^-\s+.+$/gm)?.map(l => l.replace(/^-[\s]*/, '')),
                S: (c.match(/\*\*S\s*-\s*[^\n]+\*\*[\s\S]*?(?=\n\*\*|$)/i) || [''])[0].match(/^-\s+.+$/gm)?.map(l => l.replace(/^-[\s]*/, '')),
                T: (c.match(/\*\*T\s*-\s*[^\n]+\*\*[\s\S]*?(?=\n\*\*|$)/i) || [''])[0].match(/^-\s+.+$/gm)?.map(l => l.replace(/^-[\s]*/, '')),
            };
            items.push({ title, company, partner, industry, classification, problem, solution, results, lessons, fast });
        }
    };

    parseBlockGroup(failureBlocks, 'failure');
    parseBlockGroup(successBlocks, 'success');
    return items;
}
