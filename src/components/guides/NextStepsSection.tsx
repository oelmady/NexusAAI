// ...existing code...
import AssessmentWidget from './AssessmentWidget'; // Path is correct, but check for casing or file extension issues if error persists

interface NextStepsSectionProps {
    nextSteps: {
        assessmentPreview: string[];
        ctaPrimary: string;
        ctaSecondary: string;
        contact: {
            email: string;
            phone: string;
        };
        relatedGuides: string[];
    };
}

export default function NextStepsSection({ nextSteps }: NextStepsSectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary-600 mb-2">Next Steps</h2>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Quick Assessment Preview:</h3>
                <ul className="list-disc ml-6">
                    {nextSteps.assessmentPreview.map((q, idx) => (
                        <li key={idx}>{q}</li>
                    ))}
                </ul>
            </div>
            <AssessmentWidget guideId={nextSteps.relatedGuides[0]} inline />
            <div className="mt-4 flex flex-col gap-2">
                <button className="bg-primary-600 text-white py-2 px-4 rounded font-semibold">{nextSteps.ctaPrimary}</button>
                <button className="bg-white border border-primary-600 text-primary-600 py-2 px-4 rounded font-semibold">{nextSteps.ctaSecondary}</button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                <strong>Questions?</strong> Email us at <a href={`mailto:${nextSteps.contact.email}`} className="underline">{nextSteps.contact.email}</a> or call {nextSteps.contact.phone}
            </div>
        </section>
    );
}
