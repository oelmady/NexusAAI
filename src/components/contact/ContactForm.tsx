import { useState } from 'react';
import { Button, Card } from '../ui';
import { analytics } from '../../utils/analytics';

interface ContactFormProps {
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'compact';
    onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    phone?: string;
    message: string;
    automationInterest: string;
    timeframe: string;
    budget: string;
}

const automationOptions = [
    'Data processing and entry',
    'Customer communication',
    'Content creation',
    'Administrative tasks',
    'Sales and marketing',
    'Financial processes',
    'Not sure - need assessment'
];

const timeframeOptions = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options'
];

const budgetOptions = [
    'Under $1,000/month',
    '$1,000 - $5,000/month',
    '$5,000 - $15,000/month',
    '$15,000+/month',
    'Need cost estimation'
];

export default function ContactForm({
    title = "Get Your Free Automation Assessment",
    subtitle = "Discover how much time and money you could save with AI automation",
    variant = 'default',
    onSubmit
}: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        automationInterest: '',
        timeframe: '',
        budget: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.automationInterest) {
            newErrors.automationInterest = 'Please select an area of interest';
        }

        if (!formData.timeframe) {
            newErrors.timeframe = 'Please select a timeframe';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please describe your automation needs';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate form submission (replace with actual EmailJS or API call)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Track conversion event
            analytics.ctaClick('submit_assessment', 'contact_form');

            // Call optional onSubmit handler
            if (onSubmit) {
                onSubmit(formData);
            }

            setIsSubmitted(true);

            // Reset form after delay
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: '',
                    automationInterest: '',
                    timeframe: '',
                    budget: ''
                });
            }, 3000);

        } catch (error) {
            console.error('Form submission error:', error);
            // Handle error (show error message)
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
        if (field === 'automationInterest' || field === 'timeframe') {
            analytics.caseFilterChange({ [field]: value });
        }
    };

    if (isSubmitted) {
        return (
            <Card className="text-center p-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                    Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                    We've received your automation assessment request. Our team will review your information
                    and send you a detailed analysis within 24-48 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">What's Next?</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                        <li>📧 Confirmation email sent to {formData.email}</li>
                        <li>🔍 Our team reviews your automation needs</li>
                        <li>📊 Custom ROI analysis prepared</li>
                        <li>📞 Follow-up call scheduled (if requested)</li>
                    </ul>
                </div>
            </Card>
        );
    }

    return (
        <Card className={variant === 'compact' ? 'p-4' : 'p-6'}>
            <div className="text-center mb-6">
                <h3 className={`font-bold text-gray-900 mb-2 ${variant === 'compact' ? 'text-lg' : 'text-2xl'}`}>
                    {title}
                </h3>
                <p className={`text-gray-600 ${variant === 'compact' ? 'text-sm' : 'text-base'}`}>
                    {subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.name ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.email ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="your.email@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company *
                        </label>
                        <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.company ? 'border-red-300' : 'border-gray-300'
                                }`}
                            placeholder="Your company name"
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone (Optional)
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </div>

                {/* Automation Interests */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Automation Interest *
                    </label>
                    <select
                        value={formData.automationInterest}
                        onChange={(e) => handleInputChange('automationInterest', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.automationInterest ? 'border-red-300' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select an area...</option>
                        {automationOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {errors.automationInterest && (
                        <p className="text-red-500 text-xs mt-1">{errors.automationInterest}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Implementation Timeframe *
                        </label>
                        <select
                            value={formData.timeframe}
                            onChange={(e) => handleInputChange('timeframe', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.timeframe ? 'border-red-300' : 'border-gray-300'
                                }`}
                        >
                            <option value="">Select timeframe...</option>
                            {timeframeOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        {errors.timeframe && <p className="text-red-500 text-xs mt-1">{errors.timeframe}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Budget Range (Optional)
                        </label>
                        <select
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="">Select budget...</option>
                            {budgetOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Describe Your Automation Needs *
                    </label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.message ? 'border-red-300' : 'border-gray-300'
                            }`}
                        placeholder="Tell us about the manual processes you'd like to automate, current challenges, and your goals..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                        </>
                    ) : (
                        '🚀 Get My Free Assessment'
                    )}
                </Button>

                {/* Educational Disclaimer */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <div className="flex items-start">
                        <div className="text-blue-600 text-sm mr-2">💡</div>
                        <div>
                            <h4 className="font-semibold text-blue-900 text-sm mb-1">Educational Consultation</h4>
                            <p className="text-blue-800 text-xs leading-relaxed">
                                This assessment is provided for educational purposes to help you understand
                                automation opportunities. All recommendations are general guidance based on
                                common business patterns. Actual implementation results may vary based on
                                your specific requirements and technical environment.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
}