import type { AITool } from '../types';

export const aiTools: AITool[] = [
    {
        id: 'zapier',
        name: 'Zapier',
        category: 'automation',
        description: 'Connect apps and automate workflows without coding. Ideal for data sync, notifications, and multi-step processes.',
        businessValue: {
            revenueImpact: 2000,
            costReduction: 3000,
            riskMitigation: 'low',
            implementationComplexity: 'low'
        },
        pricing: {
            freeTier: true,
            startingPrice: 20,
            pricingModel: 'monthly',
            roiTimeline: '7-14 days'
        },
        implementation: {
            setupTime: '1-3 hours',
            complexity: 'low',
            technicalRequirements: ['Internet connection', 'App accounts to connect'],
            skillLevel: 'beginner',
            weeklyImplementation: {
                day1_2: 'Map workflows and identify automation opportunities',
                day3_4: 'Build and test automations with sample data',
                day5_7: 'Deploy live automations and monitor performance'
            },
            risks: {
                dependency: 'Reliance on third-party integrations',
                quality: 'Potential for automation failures',
                humanImpact: 'Reduced manual oversight'
            },
            mitigation: ['Set up error notifications', 'Regular testing', 'Backup processes'],
            alternatives: [
                { name: 'Make.com', comparison: 'More complex but more powerful' },
                { name: 'Microsoft Power Automate', comparison: 'Better for Office 365 integration' }
            ],
            benchmarks: [
                { industry: 'SaaS', performance: '15-25% time savings' },
                { industry: 'E-commerce', performance: '20-30% error reduction' }
            ]
        },
        integrations: ['Gmail', 'Slack', 'Salesforce', 'HubSpot', 'Shopify', 'Google Sheets'],
        useCases: ['Lead qualification', 'Data sync', 'Email automation', 'Social media posting'],
        pros: ['Easy to use', 'No coding required', 'Extensive app library'],
        cons: ['Limited customization', 'Monthly cost adds up', 'Dependency on third parties'],
        caseStudies: ['ai-automation-educational']
    },
    {
        id: 'make-com',
        name: 'Make.com',
        category: 'automation',
        description: 'Visual workflow automation platform with advanced logic, branching, and data transformation capabilities.',
        businessValue: {
            revenueImpact: 3000,
            costReduction: 4000,
            riskMitigation: 'medium',
            implementationComplexity: 'medium'
        },
        pricing: {
            freeTier: true,
            startingPrice: 9,
            pricingModel: 'monthly',
            roiTimeline: '14-30 days'
        },
        implementation: {
            setupTime: '2-6 hours',
            complexity: 'medium',
            technicalRequirements: ['API knowledge helpful', 'Data mapping skills'],
            skillLevel: 'intermediate',
            weeklyImplementation: {
                day1_2: 'Design complex workflows with conditional logic',
                day3_4: 'Set up data transformations and error handling',
                day5_7: 'Test scenarios and optimize performance'
            },
            risks: {
                dependency: 'Complex workflows can break easily',
                quality: 'Steep learning curve',
                humanImpact: 'Over-automation risks'
            },
            mitigation: ['Comprehensive testing', 'Documentation', 'Team training'],
            alternatives: [
                { name: 'Zapier', comparison: 'Simpler but less powerful' },
                { name: 'n8n', comparison: 'Open source alternative' }
            ],
            benchmarks: [
                { industry: 'Manufacturing', performance: '30-40% process efficiency' },
                { industry: 'Marketing', performance: '25-35% campaign automation' }
            ]
        },
        integrations: ['HTTP/REST APIs', 'Databases', 'Email platforms', 'CRMs', 'Cloud storage'],
        useCases: ['Complex data processing', 'Multi-step workflows', 'API integrations', 'Business logic automation'],
        pros: ['Powerful visual editor', 'Advanced logic capabilities', 'Competitive pricing'],
        cons: ['Steeper learning curve', 'Complex for simple tasks', 'Limited pre-built templates'],
        caseStudies: ['ai-automation-educational']
    },
    {
        id: 'chatgpt-api',
        name: 'ChatGPT API',
        category: 'content',
        description: 'AI-powered text generation for content creation, customer support, and data analysis.',
        businessValue: {
            revenueImpact: 5000,
            costReduction: 6000,
            riskMitigation: 'medium',
            implementationComplexity: 'medium'
        },
        pricing: {
            freeTier: false,
            startingPrice: 20,
            pricingModel: 'per-use',
            roiTimeline: '7-14 days'
        },
        implementation: {
            setupTime: '1-4 hours',
            complexity: 'medium',
            technicalRequirements: ['API integration skills', 'Prompt engineering knowledge'],
            skillLevel: 'intermediate',
            weeklyImplementation: {
                day1_2: 'Design prompts and test content generation',
                day3_4: 'Integrate API into existing systems',
                day5_7: 'Set up quality control and monitoring'
            },
            risks: {
                dependency: 'AI hallucinations and inaccuracies',
                quality: 'Inconsistent output quality',
                humanImpact: 'Reduced creative oversight'
            },
            mitigation: ['Human review processes', 'Quality guidelines', 'Version control'],
            alternatives: [
                { name: 'Claude API', comparison: 'Better for analysis tasks' },
                { name: 'Gemini API', comparison: 'Google ecosystem integration' }
            ],
            benchmarks: [
                { industry: 'Content Marketing', performance: '50-70% faster content creation' },
                { industry: 'Customer Support', performance: '40-60% response time reduction' }
            ]
        },
        integrations: ['REST API', 'Webhooks', 'Custom applications', 'CMS platforms'],
        useCases: ['Content generation', 'Email drafting', 'Customer support', 'Data analysis'],
        pros: ['High-quality outputs', 'Versatile applications', 'Continuous improvements'],
        cons: ['Usage-based pricing', 'Requires prompt engineering', 'Potential for bias'],
        caseStudies: ['ai-automation-educational']
    }
];