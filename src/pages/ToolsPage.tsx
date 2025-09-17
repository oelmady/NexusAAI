import { AIToolsDatabase } from '../components/tools';
import SEO from '../components/SEO';

export default function ToolsPage() {
    return (
        <>
            <SEO
                title="AI Tools Database - NexusAAI"
                description="Comprehensive database of AI automation tools with implementation guides, ROI calculations, and business impact analysis using the FAST Framework."
                keywords="AI tools, automation, business efficiency, ROI calculator, implementation guide"
            />
            <AIToolsDatabase />
        </>
    );
}