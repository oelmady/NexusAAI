/*
  Lightweight analytics utility: pushes to window.dataLayer if available,
  otherwise logs to console. Safe for SSR and static sites. No PII beyond
  provided props. Extend as needed for GA4, Plausible, or Segment.
*/

type AnalyticsEvent = {
    event: string;
    category?: string;
    label?: string;
    value?: number;
    metadata?: Record<string, unknown>;
};

const pushToDataLayer = (payload: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer && Array.isArray((window as any).dataLayer)) {
        (window as any).dataLayer.push(payload);
    }
};

export function track(ev: AnalyticsEvent) {
    const base = {
        event: ev.event,
        category: ev.category || 'interaction',
        label: ev.label,
        value: ev.value,
        ...ev.metadata,
        ts: new Date().toISOString()
    };
    try {
        pushToDataLayer(base);
    } catch (_) {
        // no-op
    }
    if (typeof window !== 'undefined' && !(window as any).dataLayer) {
        // Console fallback to aid debugging
        // eslint-disable-next-line no-console
        console.info('[analytics]', base);
    }
}

// Helper wrappers
export const analytics = {
    roiOpen(source?: string) {
        track({ event: 'roi_open', category: 'engagement', label: source });
    },
    checklistDownload(industry: string) {
        track({ event: 'checklist_download', category: 'conversion', label: industry });
    },
    caseFilterChange(filters: Record<string, string>) {
        track({ event: 'case_filter_change', category: 'engagement', metadata: filters });
    },
    caseModalOpen(title: string, classification: string) {
        track({ event: 'case_modal_open', category: 'engagement', label: `${classification} | ${title}` });
    },
    ctaClick(label: string, context?: string) {
        track({ event: 'cta_click', category: 'conversion', label: label, metadata: context ? { context } : undefined });
    }
};
