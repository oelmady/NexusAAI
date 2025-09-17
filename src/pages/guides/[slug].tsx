import GuideLayout from '../../components/guides/GuideLayout';
import guidesData from '../../data/guides.json';
import { useParams } from 'react-router-dom';

export default function GuidePage() {
    const { slug } = useParams<{ slug: string }>();
    const guide = guidesData.guides.find((g: any) => g.slug === slug);

    if (!guide) {
        return <div className="max-w-2xl mx-auto py-16 text-center text-red-600">Guide not found.</div>;
    }

    return <GuideLayout guide={guide} />;
}
