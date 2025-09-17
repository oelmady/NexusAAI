// Utility functions for context-driven assessment logic
// These functions extract and format insights from the context folder for use in assessment and UI

// ...existing code...

// FAST Framework mapping
export function getFASTSteps(problemCategoryId: string) {
    // Map category to FAST steps (from context/FAST.md)
    // Example: return summary for First Principles, Action, Second Order, Triangulation
    // For demo, use static mapping
    const fastMap: Record<string, any> = {
        data: {
            firstPrinciples: 'Analyze root causes of data bottlenecks and constraints.',
            action: 'Implement 1-week sprint for automated data processing.',
            secondOrder: 'Assess risks of data quality and integration.',
            triangulation: 'Validate solution with benchmarks and alternative tools.'
        },
        process: {
            firstPrinciples: 'Identify repetitive tasks and process inefficiencies.',
            action: 'Automate workflows with RPA and integration tools.',
            secondOrder: 'Evaluate impact on team and process reliability.',
            triangulation: 'Compare automation platforms for best fit.'
        },
        communication: {
            firstPrinciples: 'Map communication scale and timing issues.',
            action: 'Deploy AI chatbots and automated response systems.',
            secondOrder: 'Monitor customer experience and escalation risks.',
            triangulation: 'Benchmark against industry best practices.'
        },
        content: {
            firstPrinciples: 'Assess content volume and relevance gaps.',
            action: 'Use AI content generation and optimization tools.',
            secondOrder: 'Review for quality, bias, and brand alignment.',
            triangulation: 'Test multiple tools and measure performance.'
        }
    };
    return fastMap[problemCategoryId] || null;
}

// Business equation mapping
export function getBusinessEquationImpact(problemCategoryId: string) {
    // Map category to business equation (from context/value-framework.md)
    const equationMap: Record<string, string> = {
        data: 'Cost reduction and risk mitigation',
        process: 'Profit improvement and cost savings',
        communication: 'Growth through acquisition and retention',
        content: 'Growth and value via content scale and optimization'
    };
    return equationMap[problemCategoryId] || 'Business impact';
}

// Solution module mapping
export function getSolutionModule(problemCategoryId: string) {
    // Map category to solution module (from context/solutions-framework.md)
    const solutionMap: Record<string, string> = {
        data: 'Automated Data Processing Pipeline (Zapier, Make, Airtable)',
        process: 'Robotic Process Automation (UiPath, Zapier)',
        communication: 'AI Chatbot + Human Escalation (Intercom, ChatGPT)',
        content: 'AI Content Production Pipeline (ChatGPT, Canva)'
    };
    return solutionMap[problemCategoryId] || 'Custom AI solution';
}

// Link to context guides
export function getContextGuideLink(problemCategoryId: string) {
    // Map category to relevant context markdown file
    const guideMap: Record<string, string> = {
        data: '/context/solutions-framework.md',
        process: '/context/value-framework.md',
        communication: '/context/retainer-case-study.md',
        content: '/context/FAST.md'
    };
    return guideMap[problemCategoryId] || '/context/website-impl.md';
}
