import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function GuidePage() {
    return (
        <div className="min-h-screen">
            <SEO
                title="FAST Framework Guide | AI Automation Implementation Methodology"
                description="Learn the proven FAST Framework for AI automation. Step-by-step implementation guide with real examples and best practices from 500+ business implementations."
                keywords="FAST framework guide, AI automation methodology, business process automation implementation, workflow optimization strategy"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The FAST Framework
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            The proven methodology that's helped 500+ businesses automate processes,
                            save 20+ hours weekly, and scale without hiring. Learn the exact system step-by-step.
                        </p>
                        <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg mx-auto mb-4">
                            <h3 className="font-bold text-gray-900 mb-2">🚀 Framework Overview</h3>
                            <p className="text-gray-600 text-sm">
                                4 phases • 1-week sprints • 80-90% solutions • Immediate results
                            </p>
                        </div>
                        <div className="mt-2 text-sm text-blue-700">
                            {/* Context guide links removed as requested */}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAST Framework Details */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">

                        {/* F - First Principles */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                                        F
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">First Principles</h2>
                                        <p className="text-gray-600">Identify root causes, not symptoms</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Stop treating symptoms. Dig deep to find the fundamental constraints
                                    that are actually limiting your business growth. Most "solutions" fail
                                    because they address the wrong problem.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Map your value chain: Input → Process → Output → Outcome</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Identify physical, human, and system constraints</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Question every assumption about "how things must be done"</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Example: Customer Support</h4>
                                    <div className="space-y-3 text-sm">
                                        <div><strong>Symptom:</strong> "Our support team is overwhelmed"</div>
                                        <div><strong>Root Cause:</strong> "90% of tickets are the same 5 questions"</div>
                                        <div><strong>Constraint:</strong> "Knowledge isn't accessible to customers"</div>
                                        <div><strong>Solution:</strong> "AI chatbot + self-service knowledge base"</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* A - Action Oriented */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                                        A
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Action Oriented</h2>
                                        <p className="text-gray-600">80-90% solutions in 1/10th the time</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Perfect is the enemy of good. Implement 80-90% solutions in 1-week sprints
                                    rather than waiting months for the "perfect" solution. Start seeing results immediately.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Day 1-2: Rapid prototyping and tool selection</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Day 3-4: Implementation and basic testing</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-1">✓</span>
                                        <span className="text-gray-700">Day 5-7: Optimization and team training</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">1-Week Sprint Example</h4>
                                    <div className="space-y-3 text-sm">
                                        <div><strong>Mon-Tue:</strong> Set up Zapier + ChatGPT for email sorting</div>
                                        <div><strong>Wed-Thu:</strong> Configure automated responses for common inquiries</div>
                                        <div><strong>Fri-Sun:</strong> Train team, refine rules, measure time saved</div>
                                        <div className="mt-4 p-3 bg-green-100 rounded">
                                            <strong>Result:</strong> 60% of emails handled automatically, 15 hours/week saved
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* S - Second Order */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                                        S
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Second Order Thinking</h2>
                                        <p className="text-gray-600">Anticipate consequences and risks</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Every action has consequences. Analyze not just what happens immediately,
                                    but what happens next, and what happens after that. Plan for both positive
                                    and negative second-order effects.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-orange-500 mr-3 mt-1">⚠️</span>
                                        <span className="text-gray-700">What could break if this automation fails?</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-orange-500 mr-3 mt-1">⚠️</span>
                                        <span className="text-gray-700">How might this change team dynamics?</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-orange-500 mr-3 mt-1">⚠️</span>
                                        <span className="text-gray-700">What new problems might this create?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Risk Analysis Example</h4>
                                    <div className="space-y-3 text-sm">
                                        <div><strong>Primary:</strong> Chatbot reduces personal touch</div>
                                        <div><strong>Secondary:</strong> VIP customers feel neglected</div>
                                        <div><strong>Tertiary:</strong> Competitor gains premium customers</div>
                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <strong>Mitigation:</strong> VIP routing rules + human escalation for high-value accounts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* T - Triangulation */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                                        T
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Triangulation</h2>
                                        <p className="text-gray-600">Validate through multiple reference points</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Don't rely on a single data point. Validate your solution through multiple
                                    reference points: internal metrics, external benchmarks, alternative approaches,
                                    and stakeholder feedback.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">📊</span>
                                        <span className="text-gray-700">Compare against industry benchmarks</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">📊</span>
                                        <span className="text-gray-700">Test alternative solutions</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">📊</span>
                                        <span className="text-gray-700">Gather feedback from multiple stakeholders</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Validation Process</h4>
                                    <div className="space-y-3 text-sm">
                                        <div><strong>Internal:</strong> 60% response time improvement</div>
                                        <div><strong>Benchmark:</strong> Industry average is 40% improvement</div>
                                        <div><strong>Alternative:</strong> Hiring 2 more reps would cost $120K/year</div>
                                        <div><strong>Stakeholder:</strong> Customers prefer instant responses</div>
                                        <div className="mt-4 p-3 bg-green-100 rounded">
                                            <strong>Conclusion:</strong> Automation outperforms alternatives on all metrics
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Apply the FAST Framework?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Take our assessment to identify your biggest automation opportunities using this proven methodology.
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <Link
                            to="/flowchart"
                            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                        >
                            🚀 Start Your Assessment
                            <span className="ml-2">→</span>
                        </Link>
                        <Link
                            to="/tools"
                            className="border-2 border-white text-white hover:bg-primary-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                        >
                            🔧 Browse AI Tools
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}