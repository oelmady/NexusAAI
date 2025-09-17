// FAST Framework Types for AI Automation Agency

export interface BusinessEquations {
    profit: {
        revenue: number;
        cost: number;
        netProfit: number;
    };
    growth: {
        acquisition: number;
        retention: number;
        expansion: number;
    };
    value: {
        cashflow: number;
        risk: 'low' | 'medium' | 'high';
        totalValue: number;
    };
}

export interface FastApplication {
    rootProblem: string;
    fundamentalConstraints: string[];
    oneWeekSprint: {
        day1_2: string;
        day3_4: string;
        day5_7: string;
    };
    consequences: {
        positive: string[];
        negative: string[];
        mitigation: string[];
    };
    alternativesConsidered: string[];
    benchmarksUsed: string[];
}

export interface ProblemCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    fundamentalConstraints: {
        physical: string[];
        human: string[];
        system: string[];
    };
    rootCauses: string[];
    valueChainImpact: {
        input: string;
        process: string;
        output: string;
        outcome: string;
    };
    equationImpact: BusinessEquations;
    symptoms: string[];
    traditionalApproach: string;
    aiAutomationApproach: string;
    quickWinSolutions: {
        day1_2: string;
        day3_4: string;
        day5_7: string;
        successCriteria: string[];
    };
    implementationRisks: {
        primary: string;
        secondary: string[];
        mitigation: string[];
    };
    aiSolutions: string[];
    caseStudies: string[];
}

export interface AITool {
    id: string;
    name: string;
    category: 'automation' | 'content' | 'analytics' | 'communication';
    description: string;
    businessValue: {
        revenueImpact: number;
        costReduction: number;
        riskMitigation: 'low' | 'medium' | 'high';
        implementationComplexity: 'low' | 'medium' | 'high';
    };
    pricing: {
        freeTier: boolean;
        startingPrice: number;
        pricingModel: 'monthly' | 'per-use' | 'enterprise';
        roiTimeline: string;
    };
    implementation: {
        setupTime: string;
        complexity: 'low' | 'medium' | 'high';
        technicalRequirements: string[];
        skillLevel: 'beginner' | 'intermediate' | 'advanced';
        weeklyImplementation: {
            day1_2: string;
            day3_4: string;
            day5_7: string;
        };
        risks: {
            dependency: string;
            quality: string;
            humanImpact: string;
        };
        mitigation: string[];
        alternatives: {
            name: string;
            comparison: string;
        }[];
        benchmarks: {
            industry: string;
            performance: string;
        }[];
    };
    integrations: string[];
    useCases: string[];
    pros: string[];
    cons: string[];
    caseStudies: string[];
}

export interface CaseStudy {
    id: string;
    title: string;
    industry: string;
    companySize: string;
    fastApplication: FastApplication;
    businessEquations: BusinessEquations;
    problem: string;
    traditionalApproach: string;
    aiAutomationSolution: string;
    toolsUsed: string[];
    implementation: {
        timeline: string;
        cost: number;
        teamSize: number;
        complexity: 'low' | 'medium' | 'high';
    };
    results: {
        timeSaved: string;
        costReduction: string;
        revenueIncrease?: string;
        roi: string;
        timeline: string;
        profitImprovement: number;
        growthMetrics: {
            acquisitionImprovement: string;
            retentionImprovement: string;
            expansionIncrease: string;
        };
    };
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    } | undefined; // Optional - used only for educational demonstrations
    lessonsLearned: {
        whatWorked: string[];
        challenges: string[];
        recommendations: string[];
    };
}