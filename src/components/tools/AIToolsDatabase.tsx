
import { Card } from '../ui';

export default function AIToolsDatabase() {

    // Mapping of business processes to recommended AI automation systems
    const processMappings = [
        {
            process: 'Data Processing Automation',
            description: 'Automate manual data entry, validation, and syncing across systems.',
            aiSystems: [
                { name: 'Zapier', impact: '15-25% time savings, 20-30% error reduction', example: 'Sync CRM and accounting data automatically.' },
                { name: 'Make.com', impact: 'Advanced logic for complex data flows', example: 'Automate multi-step data transformations.' }
            ]
        },
        {
            process: 'Invoice Processing Automation',
            description: 'Automate invoice creation, approval, and payment tracking.',
            aiSystems: [
                { name: 'UiPath', impact: 'Reduce payment delays by 60%', example: 'Extract invoice data and trigger payment workflows.' }
            ]
        },
        {
            process: 'Inventory Management Automation',
            description: 'Track inventory levels, automate reordering, and reduce stockouts.',
            aiSystems: [
                { name: 'Microsoft Power Automate', impact: 'Cut inventory costs by 25%', example: 'Automate stock level alerts and supplier orders.' }
            ]
        },
        {
            process: 'Quality Control Automation',
            description: 'Automate inspection, error detection, and reporting.',
            aiSystems: [
                { name: 'Google Cloud Vision', impact: 'Eliminate 95% of processing errors', example: 'Automate visual inspection of products.' }
            ]
        },
        {
            process: 'Lead Qualification Automation',
            description: 'Score and qualify leads automatically to boost conversion rates.',
            aiSystems: [
                { name: 'HubSpot AI', impact: 'Convert 40% more leads', example: 'Automate lead scoring and follow-up.' }
            ]
        },
        {
            process: 'Customer Onboarding Automation',
            description: 'Automate onboarding steps, document collection, and training.',
            aiSystems: [
                { name: 'Intercom', impact: 'Reduce churn by 50%', example: 'Automate onboarding messages and checklists.' }
            ]
        },
        {
            process: 'Email Marketing Automation',
            description: 'Automate email campaigns, segmentation, and follow-ups.',
            aiSystems: [
                { name: 'Mailchimp', impact: 'Generate 3x more leads', example: 'Automate targeted email sequences.' }
            ]
        },
        {
            process: 'Social Media Automation',
            description: 'Automate posting, engagement, and analytics across platforms.',
            aiSystems: [
                { name: 'Buffer', impact: 'Build brand 24/7', example: 'Automate scheduled posts and reporting.' }
            ]
        },
        {
            process: 'Appointment Scheduling Automation',
            description: 'Automate calendar bookings, reminders, and rescheduling.',
            aiSystems: [
                { name: 'Calendly', impact: 'Stop playing phone tag', example: 'Automate meeting scheduling and reminders.' }
            ]
        },
        {
            process: 'Customer Support Automation',
            description: 'Automate responses, ticket routing, and self-service support.',
            aiSystems: [
                { name: 'Zendesk AI', impact: 'Respond 24/7 without hiring', example: 'Automate ticket triage and FAQ responses.' }
            ]
        },
        {
            process: 'Reporting Automation',
            description: 'Automate report generation, distribution, and insights.',
            aiSystems: [
                { name: 'Google Data Studio', impact: 'Generate reports in minutes', example: 'Automate executive dashboards and scheduled reports.' }
            ]
        },
        {
            process: 'Compliance Monitoring Automation',
            description: 'Automate compliance checks, alerts, and documentation.',
            aiSystems: [
                { name: 'LogicGate', impact: 'Never miss a compliance deadline', example: 'Automate regulatory checks and audit trails.' }
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    AI Automation Systems by Business Process
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore how AI automation systems can optimize each core business process. Each example includes recommended tools, business impact, and real-world use cases.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processMappings.map((mapping) => (
                    <Card key={mapping.process} className="p-6">
                        <h2 className="text-xl font-bold text-primary-700 mb-2">{mapping.process}</h2>
                        <p className="text-gray-700 mb-4">{mapping.description}</p>
                        <div className="space-y-3">
                            {mapping.aiSystems.map((system, idx) => (
                                <div key={system.name + idx} className="bg-gray-50 rounded-lg p-4 mb-2">
                                    <div className="font-semibold text-gray-900">{system.name}</div>
                                    <div className="text-sm text-gray-600 mb-1">{system.example}</div>
                                    <div className="text-xs text-green-700">Business Impact: {system.impact}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                    <div className="text-blue-600 text-2xl mr-4">📚</div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                            Educational Resource Notice
                        </h3>
                        <p className="text-blue-800 text-sm leading-relaxed">
                            This mapping is for educational and research purposes. Actual implementation results, costs, and timelines may vary. Consult with specialists before making technology investments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}