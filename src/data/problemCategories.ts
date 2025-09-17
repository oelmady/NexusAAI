import type { ProblemCategory } from '../types';

export const problemCategories: ProblemCategory[] = [
    {
        id: 'data-problems',
        title: 'Data Processing & Integration',
        description: 'Manual data entry, inconsistent formats, and siloed systems creating inefficiencies.',
        icon: 'Database',
        fundamentalConstraints: {
            physical: ['Storage limitations', 'Network bandwidth'],
            human: ['Manual data entry errors', 'Limited processing capacity'],
            system: ['Legacy system incompatibility', 'No real-time sync']
        },
        rootCauses: ['Lack of integration', 'Manual processes', 'Inconsistent data formats'],
        valueChainImpact: {
            input: 'Raw data from multiple sources',
            process: 'Manual collection, cleaning, and formatting',
            output: 'Inconsistent, delayed reports',
            outcome: 'Poor decision-making and missed opportunities'
        },
        equationImpact: {
            profit: { revenue: 0, cost: 5000, netProfit: -5000 },
            growth: { acquisition: -10, retention: -5, expansion: -15 },
            value: { cashflow: -5000, risk: 'high', totalValue: -60000 }
        },
        symptoms: ['Manual data entry', 'Delayed reports', 'Data inconsistencies', 'Duplicate work'],
        traditionalApproach: 'Hire more data entry staff, create manual processes, periodic data audits',
        aiAutomationApproach: 'Automated data pipelines, real-time sync, AI-powered data cleaning and validation',
        quickWinSolutions: {
            day1_2: 'Audit current data sources and identify integration points',
            day3_4: 'Set up basic automation for most frequent data transfers',
            day5_7: 'Test and validate automated processes with real data',
            successCriteria: ['50% reduction in manual data entry', 'Real-time data availability', '90% data accuracy']
        },
        implementationRisks: {
            primary: 'Data quality issues during migration',
            secondary: ['System downtime', 'User adoption resistance', 'Integration complexity'],
            mitigation: ['Staged rollout', 'Data backup procedures', 'User training program']
        },
        aiSolutions: ['zapier', 'make-com'],
        caseStudies: ['ai-automation-educational']
    },
    {
        id: 'process-problems',
        title: 'Workflow & Process Automation',
        description: 'Repetitive manual tasks, approval bottlenecks, and inconsistent process execution.',
        icon: 'Workflow',
        fundamentalConstraints: {
            physical: ['Geographic distribution', 'Time zone differences'],
            human: ['Limited availability', 'Inconsistent execution', 'Skill variations'],
            system: ['Manual handoffs', 'No process tracking', 'Approval delays']
        },
        rootCauses: ['Manual processes', 'No standardization', 'Approval bottlenecks'],
        valueChainImpact: {
            input: 'Requests and tasks requiring processing',
            process: 'Manual routing, approvals, and execution',
            output: 'Delayed completions and inconsistent quality',
            outcome: 'Customer dissatisfaction and operational inefficiency'
        },
        equationImpact: {
            profit: { revenue: -3000, cost: 4000, netProfit: -7000 },
            growth: { acquisition: -15, retention: -20, expansion: -10 },
            value: { cashflow: -7000, risk: 'high', totalValue: -84000 }
        },
        symptoms: ['Long approval times', 'Bottlenecks', 'Inconsistent execution', 'Lost requests'],
        traditionalApproach: 'Hire process managers, create manual checklists, implement approval hierarchies',
        aiAutomationApproach: 'Automated workflows, intelligent routing, real-time tracking and notifications',
        quickWinSolutions: {
            day1_2: 'Map current processes and identify automation opportunities',
            day3_4: 'Implement basic workflow automation for highest-volume processes',
            day5_7: 'Set up tracking and notification systems',
            successCriteria: ['75% faster process completion', 'Automated status updates', 'Zero lost requests']
        },
        implementationRisks: {
            primary: 'Workflow complexity overwhelming automation',
            secondary: ['Change management resistance', 'Process redesign needs', 'Training requirements'],
            mitigation: ['Start with simple processes', 'Change management program', 'Phased implementation']
        },
        aiSolutions: ['zapier', 'make-com'],
        caseStudies: ['ai-automation-educational']
    },
    {
        id: 'communication-problems',
        title: 'Customer Communication & Support',
        description: 'Slow response times, inconsistent messaging, and difficulty scaling personal communication.',
        icon: 'MessageCircle',
        fundamentalConstraints: {
            physical: ['Limited support hours', 'Channel fragmentation'],
            human: ['Limited staff capacity', 'Inconsistent responses', 'Language barriers'],
            system: ['No unified communication platform', 'Manual ticket routing', 'No conversation history']
        },
        rootCauses: ['Manual response processes', 'No knowledge base', 'Fragmented communication channels'],
        valueChainImpact: {
            input: 'Customer inquiries and support requests',
            process: 'Manual routing, research, and response crafting',
            output: 'Delayed and inconsistent customer responses',
            outcome: 'Poor customer experience and lost business'
        },
        equationImpact: {
            profit: { revenue: -8000, cost: 3000, netProfit: -11000 },
            growth: { acquisition: -25, retention: -30, expansion: -20 },
            value: { cashflow: -11000, risk: 'high', totalValue: -132000 }
        },
        symptoms: ['Slow response times', 'Inconsistent answers', 'High support costs', 'Customer complaints'],
        traditionalApproach: 'Hire more support staff, create knowledge base, implement ticketing system',
        aiAutomationApproach: 'AI chatbots, automated response suggestions, intelligent routing, sentiment analysis',
        quickWinSolutions: {
            day1_2: 'Analyze common inquiries and create automated responses',
            day3_4: 'Set up basic chatbot for frequently asked questions',
            day5_7: 'Implement intelligent routing and escalation rules',
            successCriteria: ['80% faster initial response', '50% reduction in support tickets', '90% customer satisfaction']
        },
        implementationRisks: {
            primary: 'Loss of personal touch in customer interactions',
            secondary: ['Chatbot limitations', 'Integration complexity', 'Staff concerns about job displacement'],
            mitigation: ['Human escalation paths', 'Regular bot training', 'Staff retraining for higher-value tasks']
        },
        aiSolutions: ['chatgpt-api'],
        caseStudies: ['ai-automation-educational']
    },
    {
        id: 'content-problems',
        title: 'Content Creation & Management',
        description: 'Time-consuming content creation, inconsistent messaging, and difficulty maintaining quality at scale.',
        icon: 'FileText',
        fundamentalConstraints: {
            physical: ['Creative capacity limitations', 'Review and approval time'],
            human: ['Writer availability', 'Inconsistent style', 'Subject matter expertise gaps'],
            system: ['No content templates', 'Manual creation process', 'No version control']
        },
        rootCauses: ['Manual content creation', 'No standardized processes', 'Limited creative resources'],
        valueChainImpact: {
            input: 'Content requirements and brand guidelines',
            process: 'Manual writing, editing, and approval cycles',
            output: 'Limited content volume and delayed publishing',
            outcome: 'Reduced marketing effectiveness and competitive disadvantage'
        },
        equationImpact: {
            profit: { revenue: -6000, cost: 4000, netProfit: -10000 },
            growth: { acquisition: -20, retention: -10, expansion: -25 },
            value: { cashflow: -10000, risk: 'medium', totalValue: -120000 }
        },
        symptoms: ['Slow content production', 'Inconsistent messaging', 'High content costs', 'Limited content variety'],
        traditionalApproach: 'Hire more writers, create content calendars, implement approval workflows',
        aiAutomationApproach: 'AI content generation, automated optimization, template-based creation, intelligent distribution',
        quickWinSolutions: {
            day1_2: 'Identify content types suitable for AI generation',
            day3_4: 'Set up AI content creation workflows with brand guidelines',
            day5_7: 'Implement quality control and human review processes',
            successCriteria: ['300% increase in content volume', 'Consistent brand voice', '70% faster time-to-publish']
        },
        implementationRisks: {
            primary: 'AI-generated content lacking brand authenticity',
            secondary: ['Quality control challenges', 'SEO optimization needs', 'Legal and compliance concerns'],
            mitigation: ['Human editorial oversight', 'Brand guideline training', 'Legal review processes']
        },
        aiSolutions: ['chatgpt-api'],
        caseStudies: ['ai-automation-educational']
    }
];