// ...existing code...

interface SolutionSectionProps {
    solution: {
        threeStepProcess: Array<{ step: string; detail: string }>;
        benefits: string[];
        customerQuote: string;
        successMetrics: string[];
    };
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary-600 mb-2">Solution</h2>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">The Simple 3-Step Transformation:</h3>
                <ol className="list-decimal ml-6 mb-2">
                    {solution.threeStepProcess.map((step, idx) => (
                        <li key={idx} className="mb-1">
                            <strong>{step.step}:</strong> {step.detail}
                        </li>
                    ))}
                </ol>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">What You Get:</h3>
                <ul className="list-disc ml-6">
                    {solution.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                    ))}
                </ul>
            </div>
            <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 text-blue-900 italic">
                "{solution.customerQuote}"
            </blockquote>
            <div className="mb-2">
                <h4 className="font-semibold mb-1">Success Metrics:</h4>
                <ul className="list-disc ml-6">
                    {solution.successMetrics.map((metric, idx) => (
                        <li key={idx}>{metric}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
