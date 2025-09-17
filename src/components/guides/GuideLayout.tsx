// ...existing code...
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import NextStepsSection from './NextStepsSection';
import GuideNavigation from './GuideNavigation';

interface GuideLayoutProps {
    guide: any;
}

export default function GuideLayout({ guide }: GuideLayoutProps) {
    // Breadcrumbs: Home > Guides > Current Guide
    return (
        <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
            <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2" aria-label="Breadcrumb">
                <a href="/" className="hover:underline">Home</a>
                <span>/</span>
                <a href="/guides" className="hover:underline">Guides</a>
                <span>/</span>
                <span className="text-primary-700 font-semibold">{guide.title}</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary-700 leading-tight break-words text-center">
                {guide.title}
            </h1>
            <div className="space-y-8 sm:space-y-10">
                <ProblemSection problem={guide.problem} />
                <SolutionSection solution={guide.solution} />
                <NextStepsSection nextSteps={guide.nextSteps} />
            </div>
            <div className="mt-8 sm:mt-12">
                <GuideNavigation related={guide.nextSteps.relatedGuides} />
            </div>
        </div>
    );
}
