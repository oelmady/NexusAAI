import type { CaseStudy } from '../types';

// Educational example for potential clients. No real customer data or testimonials.
export const caseStudies: CaseStudy[] = [
    {
        id: 'ai-automation-educational',
        title: 'How AI Automation Can Transform Your Business',
        industry: 'Cross-industry',
        companySize: 'Any',
        fastApplication: {
            rootProblem: 'Manual, repetitive business processes consume valuable time and resources.',
            fundamentalConstraints: [
                'Lack of integration between systems',
                'Human error in data entry and communication',
                'Difficulty scaling operations without increasing costs'
            ],
            oneWeekSprint: {
                day1_2: 'Identify and map out repetitive tasks and bottlenecks in your workflow.',
                day3_4: 'Research and select AI tools that can automate these tasks (e.g., Zapier, Make.com, ChatGPT API).',
                day5_7: 'Test automation on a small scale, measure time saved, and iterate for improvement.'
            },
            consequences: {
                positive: [
                    'Save hours per week on manual work',
                    'Reduce errors and improve consistency',
                    'Free up team for higher-value activities'
                ],
                negative: [
                    'Initial learning curve for new tools',
                    'Need for ongoing monitoring and adjustment',
                    'Potential integration challenges with legacy systems'
                ],
                mitigation: [
                    'Start with simple automations and build up',
                    'Provide training and documentation for your team',
                    'Choose tools with good support and integration options'
                ]
            },
            alternativesConsidered: [
                'Hiring additional staff',
                'Outsourcing repetitive tasks',
                'Manual process optimization without automation'
            ],
            benchmarksUsed: [
                'Industry reports on time savings from automation',
                'Best practices from leading AI consultancies',
                'Case studies published by AI tool vendors (not by NexusAutomation)'
            ]
        },
        businessEquations: {
            profit: {
                revenue: 0,
                cost: 0,
                netProfit: 0
            },
            growth: {
                acquisition: 0,
                retention: 0,
                expansion: 0
            },
            value: {
                cashflow: 0,
                risk: 'low',
                totalValue: 0
            }
        },
        problem: 'Many businesses struggle with manual processes that slow growth and increase costs. AI automation offers a way to streamline operations and focus on what matters most.',
        traditionalApproach: 'Manual process improvement, hiring more staff, outsourcing.',
        aiAutomationSolution: 'Use AI tools to automate repetitive tasks, integrate systems, and enable data-driven decision making.',
        toolsUsed: ['zapier', 'make-com', 'chatgpt-api'],
        implementation: {
            timeline: '1-2 weeks for pilot',
            cost: 0,
            teamSize: 1,
            complexity: 'low'
        },
        results: {
            timeSaved: 'Varies by business',
            costReduction: 'Varies by business',
            revenueIncrease: 'Potential for growth',
            roi: 'Depends on implementation',
            timeline: 'Immediate to short-term',
            profitImprovement: 0,
            growthMetrics: {
                acquisitionImprovement: 'Faster onboarding',
                retentionImprovement: 'Better customer experience',
                expansionIncrease: 'Scalable operations'
            }
        },
        // Educational Note: No testimonials included - this is for learning purposes only
        testimonial: undefined,
        lessonsLearned: {
            whatWorked: [
                'Start small and iterate (Educational Framework)',
                'Focus on measurable outcomes (Learning Objective)',
                'Understand AI capabilities before implementation (Educational Goal)'
            ],
            challenges: [
                'Change management and team buy-in',
                'Integration with existing systems',
                'Keeping up with new AI tools and trends'
            ],
            recommendations: [
                'Document your processes before automating',
                'Choose tools with strong support and community',
                'Monitor and optimize automations regularly'
            ]
        }
    }
];