import { useState } from 'react';
import { Button, Card } from './ui';
import { problemCategories } from '../data/problemCategories';
import type { ProblemCategory } from '../types';
import {
    getFASTSteps,
    getBusinessEquationImpact,
    getSolutionModule,
    getContextGuideLink
} from '../utils/contextMapping';

interface AssessmentQuestion {
    id: string;
    question: string;
    options: string[];
    category: string;
    weight: number;
}

const assessmentQuestions: AssessmentQuestion[] = [
    {
        id: 'time_spent',
        question: 'How many hours per week does your team spend on repetitive manual tasks?',
        options: ['Less than 5 hours', '5-15 hours', '15-30 hours', '30+ hours'],
        category: 'general',
        weight: 3
    },
    {
        id: 'data_processing',
        question: 'How do you currently handle data entry and processing?',
        options: ['Fully manual entry', 'Mix of manual and automated', 'Mostly automated with some manual', 'Fully automated'],
        category: 'data',
        weight: 2
    },
    {
        id: 'customer_communication',
        question: 'How do you handle customer inquiries and support?',
        options: ['All manual responses', 'Templates with manual sending', 'Some automated responses', 'Fully automated system'],
        category: 'communication',
        weight: 2
    },
    {
        id: 'content_creation',
        question: 'How do you create marketing and business content?',
        options: ['Everything from scratch', 'Templates with customization', 'Some AI assistance', 'Mostly AI-generated with human review'],
        category: 'content',
        weight: 2
    },
    {
        id: 'decision_making',
        question: 'How are routine business decisions made in your organization?',
        options: ['All manual review', 'Some automated rules', 'Data-driven with human oversight', 'Mostly automated decisions'],
        category: 'process',
        weight: 3
    },
    {
        id: 'biggest_bottleneck',
        question: 'What is your biggest operational bottleneck right now?',
        options: ['Data collection and analysis', 'Customer response time', 'Content production', 'Administrative processes'],
        category: 'general',
        weight: 4
    }
];

interface AssessmentResult {
    topProblemCategories: Array<{
        category: ProblemCategory;
        score: number;
        percentage: number;
    }>;
    automationPotential: 'high' | 'medium' | 'low';
    estimatedSavings: {
        hoursPerWeek: number;
        costPerMonth: number;
    };
    recommendations: string[];
}

export default function AssessmentEngine() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResults, setShowResults] = useState(false);
    const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

    const handleAnswer = (optionIndex: number) => {
        const questionId = assessmentQuestions[currentQuestion].id;
        const newAnswers = { ...answers, [questionId]: optionIndex };
        setAnswers(newAnswers);

        if (currentQuestion < assessmentQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Calculate results
            const result = calculateAssessmentResult(newAnswers);
            setAssessmentResult(result);
            setShowResults(true);
        }
    };

    const calculateAssessmentResult = (userAnswers: Record<string, number>): AssessmentResult => {
        // Calculate category scores
        const categoryScores: Record<string, number> = {
            data: 0,
            process: 0,
            communication: 0,
            content: 0
        };

        // Weight answers based on automation potential (higher index = more manual = higher automation opportunity)
        assessmentQuestions.forEach(question => {
            const answerIndex = userAnswers[question.id] || 0;
            const automationScore = (3 - answerIndex) * question.weight; // Reverse score for automation potential

            if (question.category !== 'general') {
                categoryScores[question.category] += automationScore;
            } else {
                // Distribute general questions across all categories
                Object.keys(categoryScores).forEach(cat => {
                    categoryScores[cat] += automationScore / 4;
                });
            }
        });

        // Map to problem categories and calculate percentages
        const maxPossibleScore = assessmentQuestions.reduce((sum, q) => sum + (q.weight * 3), 0) / 4;

        const topProblemCategories = Object.entries(categoryScores)
            .map(([catId, score]) => {
                const category = problemCategories.find(cat => cat.id === catId);
                return category ? {
                    category,
                    score,
                    percentage: Math.round((score / maxPossibleScore) * 100)
                } : null;
            })
            .filter(Boolean)
            .sort((a, b) => b!.score - a!.score) as AssessmentResult['topProblemCategories'];

        // Determine automation potential
        const avgScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / 4;
        const automationPotential: 'high' | 'medium' | 'low' =
            avgScore > maxPossibleScore * 0.7 ? 'high' :
                avgScore > maxPossibleScore * 0.4 ? 'medium' : 'low';

        // Estimate savings based on time spent question
        const timeSpentAnswer = userAnswers['time_spent'] || 0;
        const hoursPerWeek = [2, 10, 22, 40][timeSpentAnswer];
        const costPerMonth = hoursPerWeek * 4 * 50 * 0.7; // Assume $50/hour and 70% automation efficiency

        // Generate recommendations
        const recommendations = generateRecommendations(topProblemCategories, automationPotential);

        return {
            topProblemCategories,
            automationPotential,
            estimatedSavings: {
                hoursPerWeek: Math.round(hoursPerWeek * 0.7),
                costPerMonth: Math.round(costPerMonth)
            },
            recommendations
        };
    };

    const generateRecommendations = (
        categories: AssessmentResult['topProblemCategories'],
        potential: 'high' | 'medium' | 'low'
    ): string[] => {
        const recommendations: string[] = [];

        if (potential === 'high') {
            recommendations.push('🚀 High automation potential detected - start with quick wins in your top category');
            recommendations.push('📅 Implement a 1-week sprint to automate your highest-impact process');
        } else if (potential === 'medium') {
            recommendations.push('⚡ Good automation opportunities exist - focus on one category at a time');
            recommendations.push('🎯 Start with data automation as it often has the fastest ROI');
        } else {
            recommendations.push('📚 Begin with process documentation and small workflow improvements');
            recommendations.push('🔍 Focus on identifying specific repetitive tasks that can be automated');
        }

        // Add category-specific recommendations
        categories.slice(0, 2).forEach(({ category }) => {
            switch (category.id) {
                case 'data':
                    recommendations.push('📊 Consider tools like Zapier or Make.com for data automation');
                    break;
                case 'communication':
                    recommendations.push('💬 Implement chatbots or automated email sequences');
                    break;
                case 'content':
                    recommendations.push('✍️ Explore AI writing tools and content automation platforms');
                    break;
                case 'process':
                    recommendations.push('⚙️ Focus on workflow automation and decision routing systems');
                    break;
            }
        });

        return recommendations;
    };

    const resetAssessment = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResults(false);
        setAssessmentResult(null);
    };

    const getProgressPercentage = () => {
        return Math.round(((currentQuestion + 1) / assessmentQuestions.length) * 100);
    };

    const getAutomationPotentialColor = (potential: string) => {
        const colors = {
            high: 'text-green-600 bg-green-100',
            medium: 'text-yellow-600 bg-yellow-100',
            low: 'text-blue-600 bg-blue-100'
        };
        return colors[potential as keyof typeof colors] || 'text-gray-600 bg-gray-100';
    };

    if (showResults && assessmentResult) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Card className="text-center mb-8">
                    <div className="text-4xl mb-4">🎯</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Assessment Results
                    </h2>
                    <p className="text-gray-600">
                        Your automation opportunity analysis, mapped to consulting frameworks and business equations.
                    </p>
                </Card>

                {/* Automation Potential */}
                <Card className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        🚀 Automation Potential
                    </h3>
                    <div className="flex items-center justify-center mb-4">
                        <div className={`text-2xl font-bold px-6 py-3 rounded-lg capitalize ${getAutomationPotentialColor(assessmentResult.automationPotential)}`}>
                            {assessmentResult.automationPotential} Potential
                        </div>
                    </div>
                </Card>

                {/* Estimated Savings */}
                <Card className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        💰 Estimated Monthly Savings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">
                                {assessmentResult.estimatedSavings.hoursPerWeek} hours
                            </div>
                            <div className="text-gray-600">Saved per week</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                ${assessmentResult.estimatedSavings.costPerMonth.toLocaleString()}
                            </div>
                            <div className="text-gray-600">Cost savings per month</div>
                        </div>
                    </div>
                </Card>

                {/* Top Problem Categories with Context Mapping */}
                <Card className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        📊 Your Top Automation Opportunities
                    </h3>
                    <div className="space-y-4">
                        {assessmentResult.topProblemCategories.slice(0, 3).map((item, index) => {
                            const fastSteps = getFASTSteps(item.category.id);
                            const equationImpact = getBusinessEquationImpact(item.category.id);
                            const solutionModule = getSolutionModule(item.category.id);
                            const guideLink = getContextGuideLink(item.category.id);
                            return (
                                <div key={item.category.id} className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-2xl mr-3">{item.category.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{item.category.title}</h4>
                                                <p className="text-sm text-gray-600">{item.category.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-bold text-primary-600">#{index + 1}</div>
                                            <div className="text-sm text-gray-500">{item.percentage}% potential</div>
                                        </div>
                                    </div>
                                    {/* Contextual Insights */}
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="font-semibold text-gray-800 mb-1">FAST Sprint Plan</div>
                                            {fastSteps && (
                                                <ul className="text-sm text-gray-700 list-disc ml-4">
                                                    <li><b>First Principles:</b> {fastSteps.firstPrinciples}</li>
                                                    <li><b>Action:</b> {fastSteps.action}</li>
                                                    <li><b>Second Order:</b> {fastSteps.secondOrder}</li>
                                                    <li><b>Triangulation:</b> {fastSteps.triangulation}</li>
                                                </ul>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 mb-1">Business Equation Impact</div>
                                            <div className="text-sm text-gray-700 mb-2">{equationImpact}</div>
                                            <div className="font-semibold text-gray-800 mb-1">Solution Module</div>
                                            <div className="text-sm text-gray-700 mb-2">{solutionModule}</div>
                                            <a
                                                href={guideLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline text-sm"
                                            >
                                                Read context guide
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>

                {/* Recommendations */}
                <Card className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        💡 Next Steps & Recommendations
                    </h3>
                    <div className="space-y-3">
                        {assessmentResult.recommendations.map((rec, index) => (
                            <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                                <div className="text-blue-600 mr-3 mt-0.5">•</div>
                                <p className="text-blue-900 text-sm">{rec}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="/tools" className="w-full">
                        <Button className="w-full">
                            🛠️ Explore AI Tools
                        </Button>
                    </a>
                    <a href="/guides" className="w-full">
                        <Button variant="outline" className="w-full">
                            📚 Read Implementation Guide
                        </Button>
                    </a>
                    <Button variant="outline" className="w-full" onClick={resetAssessment}>
                        🔄 Retake Assessment
                    </Button>
                </div>

                {/* Educational Disclaimer */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="text-yellow-600 text-lg mr-3">⚠️</div>
                        <div>
                            <h4 className="font-semibold text-yellow-900 mb-1">Educational Assessment</h4>
                            <p className="text-yellow-800 text-sm">
                                This assessment provides guidance mapped to consulting frameworks and business equations.
                                Actual results depend on your specific business context, technical infrastructure,
                                and implementation approach. Use the context guides for deeper research and planning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Progress Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Automation Assessment
                    </h2>
                    <span className="text-sm text-gray-500">
                        {currentQuestion + 1} of {assessmentQuestions.length}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    {getProgressPercentage()}% complete
                </p>
            </div>

            {/* Question Card */}
            <Card className="mb-6">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">❓</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {assessmentQuestions[currentQuestion].question}
                    </h3>
                </div>

                <div className="space-y-3">
                    {assessmentQuestions[currentQuestion].options.map((option, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="w-full p-4 text-left justify-start"
                            onClick={() => handleAnswer(index)}
                        >
                            <div className="flex items-center">
                                <div className="w-6 h-6 border-2 border-primary-300 rounded-full mr-3 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                {option}
                            </div>
                        </Button>
                    ))}
                </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                >
                    ← Previous
                </Button>

                <span className="text-sm text-gray-500">
                    Click an option to continue
                </span>

                <div className="w-20"></div> {/* Spacer for alignment */}
            </div>

            {/* Educational Note */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                    <div className="text-blue-600 text-lg mr-3">💡</div>
                    <div>
                        <h4 className="font-semibold text-blue-900 mb-1">About This Assessment</h4>
                        <p className="text-blue-800 text-sm">
                            This assessment helps identify automation opportunities in your business.
                            Results are educational estimates based on common patterns and should be
                            used as a starting point for planning your automation journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}