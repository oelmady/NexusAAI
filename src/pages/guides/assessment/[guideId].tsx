import AssessmentWidget from '../../../components/guides/AssessmentWidget';
import guidesData from '../../../data/guides.json';
import assessmentsData from '../../../data/assessments.json';
import { useParams } from 'react-router-dom';

export default function AssessmentPage() {
    const { guideId } = useParams<{ guideId: string }>();
    const guide = guidesData.guides.find((g: any) => g.slug === guideId);
    const assessment = assessmentsData.assessments.find((a: any) => a.guideId === guideId);

    if (!guide || !assessment) {
        return <div className="max-w-2xl mx-auto py-16 text-center text-red-600">Assessment not found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-primary-700">{guide.title} Assessment</h1>
            <AssessmentWidget guideId={guideId ?? ''} />
            {/* TODO: Render assessment questions and results logic here */}
        </div>
    );
}
