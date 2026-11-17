import React, { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.identity.name}`
    : `${siteConfig.identity.name} | ${siteConfig.identity.title}`;

  const metaDescription =
    description ||
    `${siteConfig.identity.name} — ${siteConfig.identity.title}. ${siteConfig.identity.positioning}`;

  const canonicalUrl = `${siteConfig.siteUrl}${canonicalPath}`;
  const resolvedOgImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${siteConfig.siteUrl}${ogImage}`
    : `${siteConfig.siteUrl}/images/og-preview.png`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'author', siteConfig.identity.name);

    // 3. Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', resolvedOgImage);
    setMetaTag('property', 'og:site_name', `${siteConfig.identity.name} Portfolio`);

    // 4. Twitter / X
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', resolvedOgImage);
    setMetaTag('name', 'twitter:site', '@tiwari_shu54311');
    setMetaTag('name', 'twitter:creator', '@tiwari_shu54311');

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Structured Data (JSON-LD)
    const jsonLdId = 'structured-data-jsonld';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Default Person & WebSite Schema
    const baseStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.identity.name,
        jobTitle: siteConfig.identity.title,
        description: siteConfig.identity.positioning,
        url: siteConfig.siteUrl,
        email: siteConfig.identity.emailPlaceholder,
        sameAs: [
          siteConfig.socials.github,
          siteConfig.socials.linkedin,
          siteConfig.socials.twitter,
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${siteConfig.identity.name} | ${siteConfig.identity.title}`,
        url: siteConfig.siteUrl,
        description: siteConfig.identity.positioning,
        author: {
          '@type': 'Person',
          name: siteConfig.identity.name,
        },
      },
    ];

    scriptTag.textContent = JSON.stringify(baseStructuredData);
  }, [fullTitle, metaDescription, canonicalUrl, ogType, resolvedOgImage]);

  return null;
};
