import SEO from '../components/SEO';
import AssessmentEngine from '../components/AssessmentEngine';

export default function AssessmentPage() {
    return (
        <div className="min-h-screen">
            <SEO
                title="AI Automation Assessment | FAST Framework Business Analysis"
                description="Professional AI automation assessment using the FAST Framework. Identify your highest-ROI automation opportunities with data-driven insights."
                keywords="AI automation assessment, FAST framework, business process optimization, automation ROI, workflow analysis"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Professional AI Automation Assessment
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Data-driven analysis using the FAST Framework to identify your highest-ROI automation opportunities
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-2xl mb-2">🎯</div>
                            <h3 className="font-semibold text-gray-900">FAST Framework</h3>
                            <p className="text-sm text-gray-600">First Principles + Action + Second Order + Triangulation</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-2xl mb-2">📊</div>
                            <h3 className="font-semibold text-gray-900">ROI Analysis</h3>
                            <p className="text-sm text-gray-600">Quantified time savings and cost reduction estimates</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-2xl mb-2">🚀</div>
                            <h3 className="font-semibold text-gray-900">Action Plan</h3>
                            <p className="text-sm text-gray-600">1-week implementation sprints for quick wins</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assessment Engine */}
            <section className="py-8">
                <AssessmentEngine />
            </section>

            {/* Value Proposition */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why This Assessment Works
                        </h2>
                        <p className="text-lg text-gray-600">
                            Based on proven methodologies used by top consulting firms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">First Principles</h3>
                            <p className="text-gray-600 text-sm">Root cause analysis to identify real bottlenecks</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Action Oriented</h3>
                            <p className="text-gray-600 text-sm">1-week implementation sprints for quick wins</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🧠</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Second Order</h3>
                            <p className="text-gray-600 text-sm">Consequence analysis and risk mitigation</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔺</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Triangulation</h3>
                            <p className="text-gray-600 text-sm">Multiple validation points for optimal solutions</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}