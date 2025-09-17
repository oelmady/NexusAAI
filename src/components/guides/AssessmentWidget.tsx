// ...existing code...

interface AssessmentWidgetProps {
    guideId: string;
    inline?: boolean;
}

export default function AssessmentWidget({ guideId, inline = false }: AssessmentWidgetProps) {
    // Placeholder for assessment form logic
    return (
        <div className={`my-4 ${inline ? 'border border-primary-200 rounded p-4 bg-primary-50' : ''}`}>
            <h4 className="font-semibold text-primary-700 mb-2">Free Automation Assessment</h4>
            <p className="text-gray-700 mb-2">Take our 2-minute assessment for <span className="font-bold">{guideId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span> to discover your automation potential.</p>
            {/* TODO: Implement assessment form logic and results */}
            <button className="bg-primary-600 text-white py-2 px-4 rounded font-semibold">Start Assessment</button>
        </div>
    );
}
