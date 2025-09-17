// ...existing code...

interface GuideNavigationProps {
    related: string[];
}

export default function GuideNavigation({ related }: GuideNavigationProps) {
    return (
        <nav className="mt-8">
            <h4 className="font-semibold mb-2 text-primary-600">Related Automation Guides:</h4>
            <ul className="flex flex-wrap gap-2">
                {related.map((slug) => (
                    <li key={slug}>
                        <a href={`/guides/${slug}`} className="text-blue-600 underline hover:text-blue-800">
                            {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
