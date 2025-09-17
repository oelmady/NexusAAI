import { Modal, Button, Card } from '../ui';
import type { CaseStudy } from '../../types';

interface CaseStudyModalProps {
    caseStudy: CaseStudy | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
    if (!caseStudy) return null;

    const getComplexityColor = (complexity: string) => {
        const colors = {
            low: 'text-green-600 bg-green-100',
            medium: 'text-yellow-600 bg-yellow-100',
            high: 'text-red-600 bg-red-100'
        };
        return colors[complexity as keyof typeof colors] || 'text-gray-600 bg-gray-100';
    };

    const getIndustryIcon = (industry: string) => {
        const icons: Record<string, string> = {
            'E-commerce': '🛒',
            'Healthcare': '🏥',
            'Manufacturing': '🏭',
            'Financial Services': '💰',
            'Education': '📚',
            'Real Estate': '🏘️',
            'Technology': '💻',
            'Retail': '🏪',
            'Consulting': '💼',
            'Marketing': '📈'
        };
        return icons[industry] || '🏢';
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`${getIndustryIcon(caseStudy.industry)} ${caseStudy.title}`}
            size="xl"
        >
            <div className="space-y-6">
                {/* Company Overview */}
                <Card padding="sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-lg font-bold text-gray-900">{caseStudy.industry}</div>
                            <div className="text-sm text-gray-600">Industry</div>
                        </div>
                        <div>
                            <div className="text-lg font-bold text-gray-900">{caseStudy.companySize}</div>
                            <div className="text-sm text-gray-600">Company Size</div>
                        </div>
                        <div>
                            <div className={`text-lg font-bold px-3 py-1 rounded-lg capitalize ${getComplexityColor(caseStudy.implementation.complexity)}`}>
                                {caseStudy.implementation.complexity}
                            </div>
                            <div className="text-sm text-gray-600">Complexity</div>
                        </div>
                    </div>
                </Card>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <h3 className="text-lg font-semibold text-red-700 mb-3">❗ Problem</h3>
                        <p className="text-gray-700 text-sm mb-4">{caseStudy.problem}</p>
                        <h4 className="font-medium text-gray-800 mb-2">Traditional Approach:</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.traditionalApproach}</p>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-semibold text-green-700 mb-3">✅ AI Solution</h3>
                        <p className="text-gray-700 text-sm">{caseStudy.aiAutomationSolution}</p>
                    </Card>
                </div>

                {/* FAST Framework Application */}
                <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        ⚡ FAST Framework Application
                    </h3>
                    <div className="space-y-4">
                        <div className="border-l-4 border-primary-500 pl-4">
                            <h4 className="font-medium text-gray-900 mb-1">F - First Principles (Root Problem)</h4>
                            <p className="text-gray-700 text-sm">{caseStudy.fastApplication.rootProblem}</p>
                        </div>

                        <div className="border-l-4 border-primary-400 pl-4">
                            <h4 className="font-medium text-gray-900 mb-2">A - Action Oriented (1-Week Sprint)</h4>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <span className="font-medium text-gray-800">Day 1-2:</span>
                                    <span className="text-gray-700 ml-2">{caseStudy.fastApplication.oneWeekSprint.day1_2}</span>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-800">Day 3-4:</span>
                                    <span className="text-gray-700 ml-2">{caseStudy.fastApplication.oneWeekSprint.day3_4}</span>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-800">Day 5-7:</span>
                                    <span className="text-gray-700 ml-2">{caseStudy.fastApplication.oneWeekSprint.day5_7}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-primary-300 pl-4">
                            <h4 className="font-medium text-gray-900 mb-2">S - Second Order Thinking (Consequences)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h5 className="font-medium text-green-700 mb-1">Positive:</h5>
                                    <ul className="text-gray-700 space-y-1">
                                        {caseStudy.fastApplication.consequences.positive.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-green-500 mr-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-red-700 mb-1">Risks & Mitigation:</h5>
                                    <ul className="text-gray-700 space-y-1">
                                        {caseStudy.fastApplication.consequences.mitigation.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-blue-500 mr-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-primary-200 pl-4">
                            <h4 className="font-medium text-gray-900 mb-2">T - Triangulation (Validation)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h5 className="font-medium text-gray-800 mb-1">Alternatives Considered:</h5>
                                    <ul className="text-gray-700 space-y-1">
                                        {caseStudy.fastApplication.alternativesConsidered.map((alt, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-gray-500 mr-1">•</span>
                                                {alt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-800 mb-1">Benchmarks Used:</h5>
                                    <ul className="text-gray-700 space-y-1">
                                        {caseStudy.fastApplication.benchmarksUsed.map((benchmark, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-gray-500 mr-1">•</span>
                                                {benchmark}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Implementation Details */}
                <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        🛠️ Implementation Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-3">Project Overview</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Timeline:</span>
                                    <span className="font-medium">{caseStudy.implementation.timeline}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Team Size:</span>
                                    <span className="font-medium">{caseStudy.implementation.teamSize} people</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Investment:</span>
                                    <span className="font-medium">${caseStudy.implementation.cost.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-800 mb-3">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.toolsUsed.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Results & Business Impact */}
                <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        📊 Results & Business Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600 mb-1">
                                {caseStudy.results.timeSaved}
                            </div>
                            <div className="text-sm text-green-700">Time Saved</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                                {caseStudy.results.costReduction}
                            </div>
                            <div className="text-sm text-blue-700">Cost Reduction</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600 mb-1">
                                {caseStudy.results.roi}
                            </div>
                            <div className="text-sm text-purple-700">ROI</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600 mb-1">
                                {caseStudy.results.timeline}
                            </div>
                            <div className="text-sm text-orange-700">Payback Period</div>
                        </div>
                    </div>

                    {/* Growth Metrics */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3">Business Growth Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Customer Acquisition:</span>
                                <span className="font-medium text-green-600">
                                    {caseStudy.results.growthMetrics.acquisitionImprovement}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Retention:</span>
                                <span className="font-medium text-blue-600">
                                    {caseStudy.results.growthMetrics.retentionImprovement}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Expansion:</span>
                                <span className="font-medium text-purple-600">
                                    {caseStudy.results.growthMetrics.expansionIncrease}
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Lessons Learned */}
                <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        💡 Lessons Learned
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-medium text-green-700 mb-2">✅ What Worked</h4>
                            <ul className="space-y-1 text-sm">
                                {caseStudy.lessonsLearned.whatWorked.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-yellow-700 mb-2">⚠️ Challenges</h4>
                            <ul className="space-y-1 text-sm">
                                {caseStudy.lessonsLearned.challenges.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-blue-700 mb-2">🚀 Recommendations</h4>
                            <ul className="space-y-1 text-sm">
                                {caseStudy.lessonsLearned.recommendations.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Button className="flex-1">
                        🛠️ View Related Tools
                    </Button>
                    <Button variant="outline" className="flex-1">
                        📊 Start Assessment
                    </Button>
                    <Button variant="outline" className="flex-1">
                        📚 Implementation Guide
                    </Button>
                </div>

                {/* Educational Disclaimer */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="text-blue-600 text-lg mr-3">📚</div>
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-1">Educational Case Study</h4>
                            <p className="text-blue-800 text-sm leading-relaxed">
                                This case study is designed for educational purposes to illustrate automation principles
                                and the FAST Framework methodology. While based on realistic scenarios and industry patterns,
                                specific details are generalized for learning purposes. Actual implementation results will
                                vary based on your unique business context, technical requirements, and market conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}