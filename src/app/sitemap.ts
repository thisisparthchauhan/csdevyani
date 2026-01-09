import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://csdevyani-web-2025.web.app'

    const routes = [
        '',
        '/about',
        '/contact',
        '/login',
        '/rta-registration-india',
        '/post-registration-compliance-for-rta',
        '/stock-broker-registration-sebi',
        '/post-registration-compliance-for-stock-brokers',
        '/portfolio-manager-registration-india',
        '/pms-compliance-obligations',
        '/depository-participant-registration-india',
        '/depository-participant-compliance-obligations',
        '/alternative-investment-fund-registration-india',
        '/aif-compliance-obligations',
        '/investment-adviser-registration-india',
        '/post-registration-compliance-for-investment-advisers-in-india',
        '/sebi-research-analyst-registration',
        '/post-registration-compliance-sebi-research-analysts',
        '/insurance-advisory-services-india',
        '/privacy-policy',
        '/terms-of-service',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}
