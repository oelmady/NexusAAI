import { useState, useEffect } from 'react';
import { Card, Button } from './ui';

interface ROIInputs {
    currentManualHours: number;
    hourlyRate: number;
    automationEfficiency: number; // 0-1
    implementationCost: number;
    monthlyToolCost: number;
}

interface ROIResults {
    monthlySavings: number;
    annualSavings: number;
    totalCost: number;
    roi: number;
    paybackPeriod: number;
    netBenefit: number;
}

type ROICalculatorProps = {
    title?: string;
    defaults?: Partial<ROIInputs>;
};

export default function ROICalculator({ title, defaults }: ROICalculatorProps) {
    const [inputs, setInputs] = useState<ROIInputs>({
        currentManualHours: defaults?.currentManualHours ?? 20,
        hourlyRate: defaults?.hourlyRate ?? 50,
        automationEfficiency: defaults?.automationEfficiency ?? 0.75,
        implementationCost: defaults?.implementationCost ?? 2000,
        monthlyToolCost: defaults?.monthlyToolCost ?? 200
    });

    const [results, setResults] = useState<ROIResults | null>(null);

    const calculateROI = (inputs: ROIInputs): ROIResults => {
        const weeksPerMonth = 4.33;
        const monthlySavings = inputs.currentManualHours * weeksPerMonth * inputs.hourlyRate * inputs.automationEfficiency;
        const annualSavings = monthlySavings * 12;
        const totalCost = inputs.implementationCost + (inputs.monthlyToolCost * 12);
        const netBenefit = annualSavings - totalCost;
        const roi = totalCost > 0 ? (netBenefit / totalCost) * 100 : 0;
        const paybackPeriod = monthlySavings > 0 ? (inputs.implementationCost + inputs.monthlyToolCost) / monthlySavings : 0;

        return {
            monthlySavings,
            annualSavings,
            totalCost,
            roi,
            paybackPeriod,
            netBenefit
        };
    };

    useEffect(() => {
        setResults(calculateROI(inputs));
    }, [inputs]);

    const updateInput = (field: keyof ROIInputs, value: number) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatPercentage = (value: number): string => {
        return `${value.toFixed(1)}%`;
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {title ?? '🧮 AI Automation ROI Calculator'}
                </h2>
                <p className="text-lg text-gray-600">
                    Calculate your potential savings and return on investment from AI automation
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="h-fit">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        📊 Your Current Situation
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Weekly hours spent on manual tasks
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="168"
                                value={inputs.currentManualHours}
                                onChange={(e) => updateInput('currentManualHours', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Hours per week your team spends on repetitive tasks</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Average hourly rate ($)
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={inputs.hourlyRate}
                                onChange={(e) => updateInput('hourlyRate', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Blended hourly cost including benefits and overhead</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Automation efficiency: {formatPercentage(inputs.automationEfficiency * 100)}
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="0.95"
                                step="0.05"
                                value={inputs.automationEfficiency}
                                onChange={(e) => updateInput('automationEfficiency', Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>10%</span>
                                <span>95%</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Percentage of manual work that can be automated</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Implementation cost ($)
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={inputs.implementationCost}
                                onChange={(e) => updateInput('implementationCost', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">One-time setup and training costs</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Monthly tool cost ($)
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={inputs.monthlyToolCost}
                                onChange={(e) => updateInput('monthlyToolCost', Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Recurring subscription and maintenance costs</p>
                        </div>
                    </div>
                </Card>

                {/* Results Section */}
                <Card className="h-fit">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        📈 Your Potential Results
                    </h3>

                    {results && (
                        <div className="space-y-6">
                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">
                                        {formatCurrency(results.monthlySavings)}
                                    </div>
                                    <div className="text-sm text-green-700">Monthly Savings</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">
                                        {formatPercentage(results.roi)}
                                    </div>
                                    <div className="text-sm text-blue-700">Annual ROI</div>
                                </div>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Annual Savings</span>
                                    <span className="font-semibold text-green-600">
                                        {formatCurrency(results.annualSavings)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Total Investment</span>
                                    <span className="font-semibold text-gray-900">
                                        {formatCurrency(results.totalCost)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Net Annual Benefit</span>
                                    <span className={`font-semibold ${results.netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {formatCurrency(results.netBenefit)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-600">Payback Period</span>
                                    <span className="font-semibold text-gray-900">
                                        {results.paybackPeriod.toFixed(1)} months
                                    </span>
                                </div>
                            </div>

                            {/* ROI Interpretation */}
                            <div className={`p-4 rounded-lg ${results.roi > 100 ? 'bg-green-50 border border-green-200' :
                                results.roi > 50 ? 'bg-yellow-50 border border-yellow-200' :
                                    'bg-red-50 border border-red-200'
                                }`}>
                                <div className={`font-semibold ${results.roi > 100 ? 'text-green-800' :
                                    results.roi > 50 ? 'text-yellow-800' :
                                        'text-red-800'
                                    }`}>
                                    {results.roi > 100 ? '🚀 Excellent ROI!' :
                                        results.roi > 50 ? '✅ Good ROI' :
                                            results.roi > 0 ? '⚠️ Modest ROI' :
                                                '❌ Negative ROI'}
                                </div>
                                <p className={`text-sm mt-1 ${results.roi > 100 ? 'text-green-700' :
                                    results.roi > 50 ? 'text-yellow-700' :
                                        'text-red-700'
                                    }`}>
                                    {results.roi > 100 ? 'This automation investment has excellent potential returns.' :
                                        results.roi > 50 ? 'This automation investment shows good potential.' :
                                            results.roi > 0 ? 'Consider optimizing the approach to improve returns.' :
                                                'Current parameters show negative returns. Consider adjusting your approach.'}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <Button className="w-full" size="lg">
                                    📋 Get Your Personalized Assessment
                                </Button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    Based on your specific business needs and processes
                                </p>
                            </div>
                        </div>
                    )}
                </Card>
            </div>

            {/* Educational Note */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
                <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">💡</div>
                    <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Educational Tool</h4>
                        <p className="text-blue-800 text-sm">
                            This calculator provides estimates based on typical automation scenarios.
                            Actual results may vary depending on your specific processes, tools, and implementation approach.
                            Consider this a starting point for your automation planning.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}