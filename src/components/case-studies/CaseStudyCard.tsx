import { Card } from '../ui';
import type { CaseStudy } from '../../types';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
    onClick?: () => void;
}

export default function CaseStudyCard({ caseStudy, onClick }: CaseStudyCardProps) {
    const getImpactColor = (impact: string) => {
        const colors = {
            high: 'text-green-600 bg-green-100',
            medium: 'text-yellow-600 bg-yellow-100',
            low: 'text-blue-600 bg-blue-100'
        };
        return colors[impact as keyof typeof colors] || 'text-gray-600 bg-gray-100';
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
        <div
            className="cursor-pointer"
            onClick={onClick}
        >
            <Card hover className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                        <div className="text-2xl mr-3">
                            {getIndustryIcon(caseStudy.industry)}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {caseStudy.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {caseStudy.industry} • {caseStudy.companySize}
                            </p>
                        </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getImpactColor(caseStudy.implementation.complexity)}`}>
                        {caseStudy.implementation.complexity} Impact
                    </div>
                </div>

                {/* Problem Summary */}
                <div className="mb-4">
                    <p className="text-gray-700 text-sm line-clamp-3">
                        {caseStudy.problem}
                    </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                        <div className="text-xl font-bold text-primary-600">
                            {caseStudy.results.timeSaved}
                        </div>
                        <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-green-600">
                            {caseStudy.results.costReduction}
                        </div>
                        <div className="text-xs text-gray-600">Cost Reduction</div>
                    </div>
                </div>

                {/* Implementation Timeline */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Implementation:</span>
                        <span className="font-medium text-gray-900">{caseStudy.implementation.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">ROI Timeline:</span>
                        <span className="font-medium text-gray-900">{caseStudy.results.timeline}</span>
                    </div>
                </div>

                {/* Tools Used */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                        {caseStudy.toolsUsed.slice(0, 3).map((tool, index) => (
                            <span
                                key={index}
                                className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                            >
                                {tool}
                            </span>
                        ))}
                        {caseStudy.toolsUsed.length > 3 && (
                            <span className="text-gray-500 text-xs">
                                +{caseStudy.toolsUsed.length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* FAST Framework Highlight */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                            FAST Framework Applied
                        </div>
                        <div className="text-xs text-primary-600 font-medium">
                            Business Focus
                        </div>
                    </div>
                </div>

                {/* Educational Badge */}
                <div className="mt-3 text-center">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        📚 Educational Example
                    </span>
                </div>
            </Card>
        </div>
    );
}