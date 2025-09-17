import { useState } from 'react';
import { Button, Card } from '../ui';
import CaseStudyCard from './CaseStudyCard';
import CaseStudyModal from './CaseStudyModal';
import { caseStudies } from '../../data/caseStudies';
import type { CaseStudy } from '../../types';

const industries = [
    { id: 'all', label: 'All Industries', icon: '🏢' },
    { id: 'E-commerce', label: 'E-commerce', icon: '🛒' },
    { id: 'Healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'Manufacturing', label: 'Manufacturing', icon: '🏭' },
    { id: 'Financial Services', label: 'Financial', icon: '💰' },
    { id: 'Technology', label: 'Technology', icon: '💻' },
    { id: 'Education', label: 'Education', icon: '📚' }
];

const complexityLevels = [
    { id: 'all', label: 'All Complexities' },
    { id: 'low', label: 'Low Complexity' },
    { id: 'medium', label: 'Medium Complexity' },
    { id: 'high', label: 'High Complexity' }
];

const companySizes = [
    { id: 'all', label: 'All Sizes' },
    { id: 'startup', label: 'Startup (1-10)' },
    { id: 'small', label: 'Small (11-50)' },
    { id: 'medium', label: 'Medium (51-200)' },
    { id: 'large', label: 'Large (200+)' }
];

export default function CaseStudyShowcase() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndustry, setActiveIndustry] = useState('all');
    const [activeComplexity, setActiveComplexity] = useState('all');
    const [activeCompanySize, setActiveCompanySize] = useState('all');

    const filteredCaseStudies = caseStudies.filter(caseStudy => {
        // Industry filter
        if (activeIndustry !== 'all' && caseStudy.industry !== activeIndustry) {
            return false;
        }

        // Complexity filter
        if (activeComplexity !== 'all' && caseStudy.implementation.complexity !== activeComplexity) {
            return false;
        }

        // Company size filter
        if (activeCompanySize !== 'all') {
            const sizeMapping: Record<string, string[]> = {
                startup: ['1-10 employees', 'startup'],
                small: ['11-50 employees', 'small business'],
                medium: ['51-200 employees', 'mid-size'],
                large: ['200+ employees', 'enterprise', 'large corporation']
            };

            const targetSizes = sizeMapping[activeCompanySize] || [];
            if (!targetSizes.some(size =>
                caseStudy.companySize.toLowerCase().includes(size.toLowerCase())
            )) {
                return false;
            }
        }

        return true;
    });

    const handleCaseStudyClick = (caseStudy: CaseStudy) => {
        setSelectedCaseStudy(caseStudy);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCaseStudy(null);
    };

    const getIndustryCount = () => {
        const counts: Record<string, number> = {};
        industries.forEach(industry => {
            if (industry.id === 'all') {
                counts[industry.id] = caseStudies.length;
            } else {
                counts[industry.id] = caseStudies.filter(cs => cs.industry === industry.id).length;
            }
        });
        return counts;
    };

    const industryCounts = getIndustryCount();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    AI Automation Case Studies
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Explore real-world applications of the FAST Framework across different industries.
                    Each case study demonstrates how businesses have successfully implemented AI automation
                    to drive growth, reduce costs, and improve operational efficiency.
                </p>
            </div>

            {/* Filters */}
            <div className="mb-8 space-y-6">
                {/* Industry Filter */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry</h3>
                    <div className="flex flex-wrap gap-2">
                        {industries.map((industry) => (
                            <Button
                                key={industry.id}
                                variant={activeIndustry === industry.id ? 'primary' : 'outline'}
                                size="sm"
                                onClick={() => setActiveIndustry(industry.id)}
                                className="flex items-center gap-2"
                            >
                                <span>{industry.icon}</span>
                                <span>{industry.label}</span>
                                <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                                    {industryCounts[industry.id] || 0}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Additional Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Complexity Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation Complexity</h3>
                        <div className="flex flex-wrap gap-2">
                            {complexityLevels.map((level) => (
                                <Button
                                    key={level.id}
                                    variant={activeComplexity === level.id ? 'primary' : 'outline'}
                                    size="sm"
                                    onClick={() => setActiveComplexity(level.id)}
                                >
                                    {level.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Company Size Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {companySizes.map((size) => (
                                <Button
                                    key={size.id}
                                    variant={activeCompanySize === size.id ? 'primary' : 'outline'}
                                    size="sm"
                                    onClick={() => setActiveCompanySize(size.id)}
                                >
                                    {size.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Summary */}
            <div className="mb-6">
                <p className="text-gray-600">
                    Showing <span className="font-semibold">{filteredCaseStudies.length}</span> case studies
                </p>
            </div>

            {/* Case Studies Grid */}
            {filteredCaseStudies.length === 0 ? (
                <Card className="text-center py-12">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                    <p className="text-gray-600 mb-4">
                        Try adjusting your filters to find relevant case studies.
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setActiveIndustry('all');
                            setActiveComplexity('all');
                            setActiveCompanySize('all');
                        }}
                    >
                        Clear All Filters
                    </Button>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCaseStudies.map((caseStudy) => (
                        <CaseStudyCard
                            key={caseStudy.id}
                            caseStudy={caseStudy}
                            onClick={() => handleCaseStudyClick(caseStudy)}
                        />
                    ))}
                </div>
            )}

            {/* FAST Framework Summary */}
            <div className="mt-12 bg-primary-50 rounded-lg p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        The FAST Framework in Action
                    </h2>
                    <p className="text-gray-600">
                        Every case study demonstrates our systematic approach to AI automation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-3xl mb-2">🎯</div>
                        <h3 className="font-semibold text-gray-900 mb-1">First Principles</h3>
                        <p className="text-sm text-gray-600">
                            Root cause analysis to identify fundamental constraints and opportunities
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <h3 className="font-semibold text-gray-900 mb-1">Action Oriented</h3>
                        <p className="text-sm text-gray-600">
                            1-week implementation sprints for rapid results and learning
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">🧠</div>
                        <h3 className="font-semibold text-gray-900 mb-1">Second Order</h3>
                        <p className="text-sm text-gray-600">
                            Comprehensive consequence analysis and risk mitigation strategies
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">📐</div>
                        <h3 className="font-semibold text-gray-900 mb-1">Triangulation</h3>
                        <p className="text-sm text-gray-600">
                            Multiple validation points and benchmarking for optimal solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Educational Disclaimer */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                    <div className="text-blue-600 text-2xl mr-4">📚</div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                            Educational Case Studies
                        </h3>
                        <p className="text-blue-800 text-sm leading-relaxed">
                            These case studies are designed for educational purposes to illustrate AI automation
                            principles, methodologies, and best practices. While based on realistic business
                            scenarios and industry patterns, specific company details and results are generalized
                            for learning objectives. Actual implementation outcomes will vary based on your unique
                            business context, technical infrastructure, team capabilities, and market conditions.
                            Use these as learning resources and starting points for your automation journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Case Study Detail Modal */}
            <CaseStudyModal
                caseStudy={selectedCaseStudy}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}