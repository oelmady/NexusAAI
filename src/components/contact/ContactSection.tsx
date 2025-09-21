import { Card } from '../ui';
import ContactForm from './ContactForm';
import { analytics } from '../../utils/analytics';

interface ContactSectionProps {
    title?: string;
    subtitle?: string;
    showContactInfo?: boolean;
    variant?: 'default' | 'centered' | 'split';
}

export default function ContactSection({
    title = "Ready to Automate Your Business?",
    subtitle = "Get a free assessment and discover your automation opportunities",
    showContactInfo = true,
    variant = 'default'
}: ContactSectionProps) {

    if (variant === 'split') {
        return (
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div>
                            <ContactForm
                                title="Get Your Free Assessment"
                                subtitle="Tell us about your automation needs"
                            />
                        </div>

                        {/* Contact Information & Benefits */}
                        <div className="space-y-8">
                            {showContactInfo && (
                                <Card>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        📞 Get In Touch
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <span className="text-primary-600 mr-3">📧</span>
                                            <span className="text-gray-700">info@nexusaai.com</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-primary-600 mr-3">⏰</span>
                                            <span className="text-gray-700">Response within 24 hours</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-primary-600 mr-3">🌍</span>
                                            <span className="text-gray-700">Serving businesses worldwide</span>
                                        </div>
                                    </div>
                                </Card>
                            )}

                            <Card>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    🎯 What You'll Get
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="text-green-600 text-lg mr-3">✓</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Custom ROI Analysis</h4>
                                            <p className="text-gray-600 text-sm">
                                                Detailed breakdown of potential time and cost savings specific to your business
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-600 text-lg mr-3">✓</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Implementation Roadmap</h4>
                                            <p className="text-gray-600 text-sm">
                                                Step-by-step plan using the FAST Framework for quick wins
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-600 text-lg mr-3">✓</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Tool Recommendations</h4>
                                            <p className="text-gray-600 text-sm">
                                                Curated list of AI tools that match your specific needs and budget
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-600 text-lg mr-3">✓</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Risk Assessment</h4>
                                            <p className="text-gray-600 text-sm">
                                                Comprehensive analysis of implementation risks and mitigation strategies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    ⚡ FAST Framework Approach
                                </h3>
                                <div className="space-y-3">
                                    <div className="border-l-4 border-primary-500 pl-4">
                                        <h4 className="font-medium text-gray-900">F - First Principles</h4>
                                        <p className="text-gray-600 text-sm">Root cause analysis of your operational challenges</p>
                                    </div>
                                    <div className="border-l-4 border-primary-400 pl-4">
                                        <h4 className="font-medium text-gray-900">A - Action Oriented</h4>
                                        <p className="text-gray-600 text-sm">1-week implementation sprints for quick results</p>
                                    </div>
                                    <div className="border-l-4 border-primary-300 pl-4">
                                        <h4 className="font-medium text-gray-900">S - Second Order Thinking</h4>
                                        <p className="text-gray-600 text-sm">Comprehensive consequence and risk analysis</p>
                                    </div>
                                    <div className="border-l-4 border-primary-200 pl-4">
                                        <h4 className="font-medium text-gray-900">T - Triangulation</h4>
                                        <p className="text-gray-600 text-sm">Multiple validation points for optimal solutions</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'centered') {
        return (
            <div className="bg-primary-50 py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                        <p className="text-xl text-gray-600">{subtitle}</p>
                    </div>

                    <ContactForm />

                    {showContactInfo && (
                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">
                                Ready to take the next step? Contact us directly at {' '}
                            </p>
                            <a
                                href="mailto:omar.elmady@nexusautomationai.com"
                                onClick={() => analytics.ctaClick('mailto', 'contact_centered')}
                                className="text-primary-600 hover:text-primary-700 font-medium"
                            >
                                omar.elmady@nexusautomationai.com
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600">{subtitle}</p>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}