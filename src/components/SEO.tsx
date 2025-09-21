import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    structuredData?: Record<string, any>;
    image?: string;
}

export default function SEO({
    title = 'NexusAAI - Learn AI Automation That Actually Works | FAST Framework',
    description = 'Master AI automation that saves 20+ hours/week. Learn the proven FAST Framework used by leading businesses. Free assessment + implementation guides. No fluff, just results.',
    keywords = 'AI automation training, business process automation, FAST framework methodology, workflow automation course, AI tools education, process optimization',
    canonical,
    structuredData,
    image
}: SEOProps) {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = name;
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        updateMeta('description', description);
        updateMeta('keywords', keywords);

        // Open Graph
        const setOG = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('property', property);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };
        setOG('og:title', title);
        setOG('og:description', description);
        if (image) setOG('og:image', image);
        setOG('og:type', 'website');

        // Twitter
        const setTwitter = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };
        setTwitter('twitter:card', image ? 'summary_large_image' : 'summary');
        setTwitter('twitter:title', title);
        setTwitter('twitter:description', description);
        if (image) setTwitter('twitter:image', image);

        // Add canonical URL if provided
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = canonical;
        }

        // Add structured data for educational content
        const defaultStructuredData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "educationalUse": "Teaching AI automation methodology",
            "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "business professional"
            },
            "about": {
                "@type": "Thing",
                "name": "AI Automation Education",
                "description": "Educational content about artificial intelligence automation for business processes"
            }
        };

        let script = document.querySelector('script[type="application/ld+json"][data-seo]') as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo', 'true');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(structuredData ?? defaultStructuredData);
    }, [title, description, keywords, canonical, structuredData, image]);

    return null; // This component doesn't render anything
}