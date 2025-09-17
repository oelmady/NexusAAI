import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../ui';
import type { AITool } from '../../types';

interface AIToolCardProps {
    tool: AITool;
    onClick?: () => void;
}

export default function AIToolCard({ tool, onClick }: AIToolCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getCategoryColor = (category: string) => {
        const colors = {
            automation: 'bg-blue-100 text-blue-800',
            content: 'bg-green-100 text-green-800',
            analytics: 'bg-purple-100 text-purple-800',
            communication: 'bg-orange-100 text-orange-800'
        };
        return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    const getComplexityColor = (complexity: string) => {
        const colors = {
            low: 'text-green-600',
            medium: 'text-yellow-600',
            high: 'text-red-600'
        };
        return colors[complexity as keyof typeof colors] || 'text-gray-600';
    };

    const getPricingIcon = (model: string) => {
        const icons = {
            monthly: '📅',
            'per-use': '💳',
            enterprise: '🏢'
        };
        return icons[model as keyof typeof icons] || '💰';
    };

    return (
        <div
            className="cursor-pointer"
            onClick={onClick}
        >
            <Card hover className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {tool.name}
                        </h3>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tool.category)}`}>
                            {tool.category}
                        </span>
                    </div>
                    {tool.pricing.freeTier && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            Free Tier
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                    {tool.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">
                            {tool.businessValue.revenueImpact > 0
                                ? `$${tool.businessValue.revenueImpact.toLocaleString()}`
                                : 'Variable'
                            }
                        </div>
                        <div className="text-xs text-gray-600">Monthly Impact</div>
                    </div>
                    <div className="text-center">
                        <div className={`text-lg font-bold ${getComplexityColor(tool.implementation.complexity)}`}>
                            {tool.implementation.complexity}
                        </div>
                        <div className="text-xs text-gray-600">Complexity</div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Starting at:</span>
                        <span className="font-semibold">
                            {getPricingIcon(tool.pricing.pricingModel)}
                            {tool.pricing.startingPrice === 0 ? 'Free' : `$${tool.pricing.startingPrice}`}
                            {tool.pricing.pricingModel === 'monthly' && '/month'}
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        ROI Timeline: {tool.pricing.roiTimeline}
                    </div>
                </div>

                {/* Quick Features */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                        {tool.useCases.slice(0, 3).map((useCase, index) => (
                            <span
                                key={index}
                                className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                            >
                                {useCase}
                            </span>
                        ))}
                        {tool.useCases.length > 3 && (
                            <span className="text-xs text-gray-500 px-2 py-1">
                                +{tool.useCases.length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Expandable Section */}
                {isExpanded && (
                    <div className="border-t border-gray-200 pt-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Pros & Cons</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="text-green-700 font-medium mb-1">✓ Pros</h5>
                                <ul className="space-y-1">
                                    {tool.pros.slice(0, 3).map((pro, index) => (
                                        <li key={index} className="text-gray-600 text-xs">• {pro}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-red-700 font-medium mb-1">⚠ Cons</h5>
                                <ul className="space-y-1">
                                    {tool.cons.slice(0, 3).map((con, index) => (
                                        <li key={index} className="text-gray-600 text-xs">• {con}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="space-y-2 mt-auto">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex-1"
                        >
                            {isExpanded ? 'Show Less' : 'Show More'}
                        </Button>
                        <div className="flex-1 text-center text-xs text-primary-600">
                            Click card for details
                        </div>
                    </div>

                    {/* Quick Implementation Link */}
                    <Link
                        to="/guide"
                        className="block text-center text-xs text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        📚 See Implementation Guide
                    </Link>
                </div>
            </Card>
        </div>
    );
}