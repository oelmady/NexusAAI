import { Modal, Button, Card } from '../ui';
import type { AITool } from '../../types';

interface ToolModalProps {
    tool: AITool | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
    if (!tool) return null;

    const getComplexityColor = (complexity: string) => {
        const colors = {
            low: 'text-green-600 bg-green-100',
            medium: 'text-yellow-600 bg-yellow-100',
            high: 'text-red-600 bg-red-100'
        };
        return colors[complexity as keyof typeof colors] || 'text-gray-600 bg-gray-100';
    };

    const getRiskColor = (risk: string) => {
        const colors = {
            low: 'text-green-600',
            medium: 'text-yellow-600',
            high: 'text-red-600'
        };
        return colors[risk as keyof typeof colors] || 'text-gray-600';
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={tool.name}
            size="xl"
        >
            <div className="space-y-6">
                {/* Header Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card padding="sm" className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                            {tool.pricing.startingPrice === 0 ? 'Free' : `$${tool.pricing.startingPrice}`}
                        </div>
                        <div className="text-sm text-gray-600">Starting Price</div>
                        {tool.pricing.freeTier && (
                            <div className="text-xs text-green-600 mt-1">✓ Free tier available</div>
                        )}
                    </Card>

                    <Card padding="sm" className="text-center">
                        <div className={`text-2xl font-bold capitalize ${getComplexityColor(tool.implementation.complexity).split(' ')[0]}`}>
                            {tool.implementation.complexity}
                        </div>
                        <div className="text-sm text-gray-600">Complexity</div>
                        <div className="text-xs text-gray-500 mt-1">{tool.implementation.setupTime}</div>
                    </Card>

                    <Card padding="sm" className="text-center">
                        <div className={`text-2xl font-bold ${getRiskColor(tool.businessValue.riskMitigation)}`}>
                            {tool.businessValue.riskMitigation}
                        </div>
                        <div className="text-sm text-gray-600">Risk Level</div>
                        <div className="text-xs text-gray-500 mt-1">{tool.pricing.roiTimeline} ROI</div>
                    </Card>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700">{tool.description}</p>
                </div>

                {/* Business Value */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">💰 Financial Impact</h4>
                            <ul className="text-sm space-y-1">
                                <li className="flex justify-between">
                                    <span>Revenue Impact:</span>
                                    <span className="font-medium">
                                        {tool.businessValue.revenueImpact > 0
                                            ? `$${tool.businessValue.revenueImpact.toLocaleString()}/month`
                                            : 'Variable'
                                        }
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Cost Reduction:</span>
                                    <span className="font-medium">
                                        {tool.businessValue.costReduction > 0
                                            ? `$${tool.businessValue.costReduction.toLocaleString()}/month`
                                            : 'Varies'
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">⚡ Implementation</h4>
                            <ul className="text-sm space-y-1">
                                <li className="flex justify-between">
                                    <span>Setup Time:</span>
                                    <span className="font-medium">{tool.implementation.setupTime}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Skill Level:</span>
                                    <span className="font-medium capitalize">{tool.implementation.skillLevel}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAST Framework Implementation */}
                {tool.implementation.weeklyImplementation && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 1-Week Implementation Plan</h3>
                        <div className="space-y-3">
                            <div className="border-l-4 border-primary-500 pl-4">
                                <h4 className="font-medium text-gray-800">Day 1-2: Setup & Configuration</h4>
                                <p className="text-sm text-gray-600">{tool.implementation.weeklyImplementation.day1_2}</p>
                            </div>
                            <div className="border-l-4 border-primary-400 pl-4">
                                <h4 className="font-medium text-gray-800">Day 3-4: Integration & Testing</h4>
                                <p className="text-sm text-gray-600">{tool.implementation.weeklyImplementation.day3_4}</p>
                            </div>
                            <div className="border-l-4 border-primary-300 pl-4">
                                <h4 className="font-medium text-gray-800">Day 5-7: Optimization & Training</h4>
                                <p className="text-sm text-gray-600">{tool.implementation.weeklyImplementation.day5_7}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Use Cases */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                        {tool.useCases.map((useCase, index) => (
                            <span
                                key={index}
                                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                            >
                                {useCase}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Advantages</h3>
                        <ul className="space-y-2">
                            {tool.pros.map((pro, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                                    <span className="text-sm text-gray-700">{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-red-700 mb-3">⚠️ Considerations</h3>
                        <ul className="space-y-2">
                            {tool.cons.map((con, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-red-500 mr-2 mt-0.5">•</span>
                                    <span className="text-sm text-gray-700">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Technical Requirements */}
                {tool.implementation.technicalRequirements.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🔧 Technical Requirements</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {tool.implementation.technicalRequirements.map((req, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-700">
                                    <span className="text-blue-500 mr-2">•</span>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Integrations */}
                {tool.integrations.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Popular Integrations</h3>
                        <div className="flex flex-wrap gap-2">
                            {tool.integrations.map((integration, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                                >
                                    {integration}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Button className="flex-1">
                        📋 Start Implementation Assessment
                    </Button>
                    <Button variant="outline" className="flex-1">
                        📚 View Implementation Guide
                    </Button>
                </div>

                {/* Educational Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="text-blue-600 text-lg mr-3">💡</div>
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-1">Educational Resource</h4>
                            <p className="text-blue-800 text-sm">
                                This information is provided for educational purposes.
                                Actual implementation results may vary based on your specific business context and requirements.
                                Consider this as a starting point for your research and planning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}