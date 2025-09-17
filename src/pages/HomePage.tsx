// import { ArrowRight, Zap, Target, TrendingUp, CheckCircle } from 'lucide-react';
// import type { ProblemCategory } from '../types';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function HomePage() {
    const businessStats = [
        { label: 'Time Saved Weekly', value: '20-35 hours', icon: '⏱️', detail: 'Reclaim your weekends' },
        { label: 'Cost Reduction', value: '40-60%', icon: '💰', detail: 'Without sacrificing quality' },
        { label: 'Results Timeline', value: '7-14 days', icon: '📈', detail: 'See immediate impact' },
        { label: 'Implementation', value: '1-week sprints', icon: '⚡', detail: 'No 6-month projects' }
    ];

    const problemCategories = [
        {
            title: 'Data Processing & Integration',
            description: 'Stop losing hours to manual data entry, CSV uploads, and system syncing. Automate what drains your team.',
            savings: '$5,000+/month saved',
            icon: '🗄️'
        },
        {
            title: 'Workflow & Process Automation',
            description: 'End the approval bottlenecks and routing chaos. Streamline decisions that currently take days.',
            savings: '$7,000+/month saved',
            icon: '⚙️'
        },
        {
            title: 'Customer Communication',
            description: 'Scale support without hiring. Respond faster, more consistently, while reducing burnout.',
            savings: '$11,000+/month saved',
            icon: '💬'
        },
        {
            title: 'Content Creation & Management',
            description: 'Generate professional content at 10x speed. Maintain quality while scaling your output.',
            savings: '$10,000+/month saved',
            icon: '📝'
        }
    ];

    const fastFramework = [
        {
            letter: 'F',
            title: 'First Principles',
            description: 'Identify root causes and fundamental constraints limiting your business growth'
        },
        {
            letter: 'A',
            title: 'Action Oriented',
            description: 'Implement 80-90% solutions in 1-week sprints for immediate impact'
        },
        {
            letter: 'S',
            title: 'Second Order',
            description: 'Analyze consequences and risks to ensure sustainable automation'
        },
        {
            letter: 'T',
            title: 'Triangulation',
            description: 'Validate solutions through benchmarking and alternative analysis'
        }
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title="NexusAAI - AI Automation Education & FAST Framework"
                description="Learn AI automation through the FAST Framework methodology. Educational resources for business process automation, workflow optimization, and implementation strategies."
                keywords="AI automation education, FAST framework, business automation methodology, workflow optimization, process automation learning"
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            ✅ Proven by 500+ Businesses • 20+ Hours Saved Weekly
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Stop Wasting 20+ Hours Weekly on
                            <span className="text-primary-600"> Manual Tasks</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            <strong>Master the FAST Framework</strong> that's helping businesses automate processes,
                            cut costs by 40%, and scale without hiring. Get results in your first week—
                            <em>guaranteed</em> or your time back.
                        </p>

                        {/* Value Props */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
                            <div className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                No Technical Skills Required
                            </div>
                            <div className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Start Seeing Results in 7 Days
                            </div>
                            <div className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                100% Educational & Risk-Free
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/flowchart"
                                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                            >
                                🚀 Get Your FREE Automation Assessment
                                <span className="ml-2">→</span>
                            </Link>
                            <Link
                                to="/guide"
                                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                            >
                                📚 See the FAST Framework
                            </Link>
                        </div>
                    </div>
                    {/* Context Guide Links (move outside text-center div) */}
                    {/* Social Proof */}
                    <p className="text-sm text-gray-500 mt-4">
                        Join thousands learning automation • No credit card required
                    </p>
                </div>
            </section>

            {/* Business Impact Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            The Numbers Don't Lie: Real Business Impact
                        </h2>
                        <p className="text-lg text-gray-600">
                            Based on 500+ business implementations and industry research
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {businessStats.map((stat, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm border">
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem Categories */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Is Your Business Bleeding Money on These Manual Tasks?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover which processes are secretly costing you thousands monthly
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {problemCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                                <div className="flex items-start">
                                    <div className="text-3xl mr-4">{category.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{category.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-green-600 font-bold text-lg">
                                                💰 {category.savings}
                                            </span>
                                            <Link
                                                to="/flowchart"
                                                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                                            >
                                                Start Assessment
                                                <span className="ml-1">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAST Framework */}
            {/* FAST Framework + Context Reference */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            The FAST Framework for AI Implementation
                        </h2>
                        <p className="text-lg text-gray-600 mb-2">
                            Our proven methodology for successful AI automation projects
                        </p>
                        <p className="text-sm text-blue-700">
                            <a href="/context/FAST.md" target="_blank" rel="noopener noreferrer" className="underline">Read the full FAST Framework guide</a>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {fastFramework.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.letter}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Stop Wasting Time. Start Automating Today.
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Take our <strong>FREE 5-minute assessment</strong> and discover exactly which processes
                        are costing you the most money. Get your personalized automation roadmap instantly.
                    </p>

                    {/* Urgency & Scarcity */}
                    <div className="bg-white/10 rounded-lg p-4 mb-8 text-primary-100">
                        <p className="text-sm">
                            ⚡ <strong>Limited Time:</strong> Get your results in under 5 minutes •
                            No email required • Instant access
                        </p>
                    </div>

                    <Link
                        to="/flowchart"
                        className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
                    >
                        🚀 Get My FREE Automation Assessment
                        <span className="ml-2">→</span>
                    </Link>

                    <p className="text-sm text-primary-200 mt-6">
                        ✅ No signup required • ✅ Results in 5 minutes • ✅ 100% Free
                    </p>
                </div>
            </section>
        </div>
    );
}