# SEO Optimization Guide for LandLab Attorneys Website

This document outlines all the SEO optimizations implemented on the LandLab Attorneys website and provides guidance for future updates.

## Table of Contents
1. [Basic SEO Meta Tags](#basic-seo-meta-tags)
2. [Open Graph Tags](#open-graph-tags)
3. [Twitter Card Tags](#twitter-card-tags)
4. [Structured Data (JSON-LD)](#structured-data-json-ld)
5. [Technical SEO](#technical-seo)
6. [Performance Optimizations](#performance-optimizations)
7. [Best Practices for Updates](#best-practices-for-updates)

---

## Basic SEO Meta Tags

### Title Tag
```html
<title>LandLab Attorneys - Expert Legal Services in Rwanda | Professional Law Firm</title>
```
- **Purpose**: Primary ranking factor for search engines
- **Best Practice**: Keep under 60 characters, include primary keywords
- **Update When**: Changing company focus, adding new services, or rebranding

### Meta Description
```html
<meta name="description" content="LandLab Attorneys provides expert legal representation in Rwanda with over 25 years of experience. Specializing in business law, family law, criminal defense, real estate law, and more. Contact us for a free consultation." />
```
- **Purpose**: Appears in search results, affects click-through rates
- **Best Practice**: 150-160 characters, compelling and descriptive
- **Update When**: Services change, adding new practice areas, or improving conversion

### Keywords Meta Tag
```html
<meta name="keywords" content="law firm Rwanda, legal services Kigali, business law, family law, criminal defense, real estate law, attorneys Rwanda, legal consultation" />
```
- **Purpose**: Less important for modern SEO but still used by some search engines
- **Best Practice**: Include 5-10 relevant keywords
- **Update When**: Adding new services or targeting new keywords

### Robots Meta Tag
```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
```
- **Purpose**: Instructs search engine crawlers how to index the page
- **Parameters**:
  - `index`: Allow page to be indexed
  - `follow`: Follow links on the page
  - `max-snippet:-1`: No limit on text snippet length
  - `max-image-preview:large`: Allow large image previews
  - `max-video-preview:-1`: No limit on video preview length

---

## Open Graph Tags

Open Graph tags control how your website appears when shared on social media platforms like Facebook, LinkedIn, and WhatsApp.

### Core Open Graph Tags
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="LandLab Attorneys" />
<meta property="og:title" content="LandLab Attorneys - Expert Legal Services in Rwanda" />
<meta property="og:description" content="Professional law firm providing comprehensive legal services with over 25 years of experience. Specializing in business law, family law, criminal defense, and real estate law." />
<meta property="og:url" content="https://landlab-attorneys.com/" />
<meta property="og:image" content="https://landlab-attorneys.com/hero-img-1.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="LandLab Attorneys - Professional Legal Services" />
<meta property="og:locale" content="en_US" />
```

### Update Guidelines
- **og:image**: Should be 1200x630px for optimal display
- **og:title**: Can be different from page title, optimized for social sharing
- **og:description**: Should be compelling and under 300 characters
- **og:url**: Must be the canonical URL of the page

---

## Twitter Card Tags

Twitter Cards provide rich media attachments when your website is shared on Twitter.

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LandLab Attorneys - Expert Legal Services in Rwanda" />
<meta name="twitter:description" content="Professional law firm providing comprehensive legal services with over 25 years of experience. Contact us for a free consultation." />
<meta name="twitter:image" content="https://landlab-attorneys.com/hero-img-1.webp" />
<meta name="twitter:image:alt" content="LandLab Attorneys - Professional Legal Services" />
```

### Card Types
- `summary_large_image`: Large image card (recommended for most content)
- `summary`: Small image card
- `app`: Mobile app card
- `player`: Video/audio player card

---

## Structured Data (JSON-LD)

Structured data helps search engines understand your business information and can enable rich snippets in search results.

### Legal Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "LandLab Attorneys",
  "description": "Professional law firm providing comprehensive legal services with over 25 years of experience in Rwanda.",
  "url": "https://landlab-attorneys.com",
  "logo": "https://landlab-attorneys.com/hero-img-1.webp",
  "telephone": "+250788306700",
  "email": "info@landlab-attorneys.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Legal District",
    "addressLocality": "Kigali",
    "addressCountry": "Rwanda"
  },
  "serviceType": [
    "Business Law",
    "Family Law", 
    "Criminal Defense",
    "Real Estate Law"
  ]
}
```

### Benefits
- Enables rich snippets in search results
- Improves local SEO
- Helps with voice search optimization
- Provides clear business information to search engines

---

## Technical SEO

### Canonical URL
```html
<link rel="canonical" href="https://landlab-attorneys.com/" />
```
- **Purpose**: Prevents duplicate content issues
- **Update When**: URL structure changes or when adding query parameters

### Language Declaration
```html
<html lang="en">
```
- **Purpose**: Helps search engines understand the page language
- **Update When**: Adding multilingual support

### Geo-Location Tags
```html
<meta name="geo.region" content="RW" />
<meta name="geo.placename" content="Kigali, Rwanda" />
<meta name="geo.position" content="-1.9441;30.0619" />
```
- **Purpose**: Improves local SEO
- **Update When**: Office location changes

---

## Performance Optimizations

### Image Preloading
```html
<link rel="preload" href="/hero-img-1.webp" as="image" type="image/webp" />
```
- **Purpose**: Faster loading of critical images
- **Best Practice**: Only preload above-the-fold images
- **Update When**: Changing hero images or critical visual elements

### WebP Image Format
- **Benefits**: 25-35% smaller file sizes compared to JPEG
- **Browser Support**: Excellent (95%+ of browsers)
- **Fallback**: Ensure fallback images for older browsers if needed

---

## Best Practices for Updates

### When to Update SEO Tags

1. **Title and Description**
   - New services added
   - Rebranding or name changes
   - Targeting new keywords
   - Improving click-through rates

2. **Open Graph/Twitter Cards**
   - New hero images
   - Marketing campaigns
   - Seasonal promotions
   - Brand updates

3. **Structured Data**
   - Address changes
   - Phone number updates
   - New service offerings
   - Staff changes (founder, key personnel)
   - Business hours modifications

### SEO Monitoring Tools

1. **Google Search Console**
   - Monitor search performance
   - Check for crawl errors
   - Submit sitemaps

2. **Google PageSpeed Insights**
   - Monitor page loading speed
   - Get performance recommendations

3. **Social Media Debuggers**
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

### Content Updates

When updating content in `src/content.json`, consider updating:
- Meta descriptions to reflect new services
- Structured data service types
- Keywords meta tag
- Open Graph descriptions

### Image Updates

When changing images:
- Update preload links for new hero images
- Update Open Graph and Twitter Card image URLs
- Ensure new images are optimized (WebP format, proper dimensions)
- Update image alt text in structured data

---

## Checklist for New Pages

When creating new pages, ensure each has:
- [ ] Unique title tag (under 60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Appropriate structured data
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Alt text for all images
- [ ] Internal linking strategy

---

## Common SEO Mistakes to Avoid

1. **Duplicate Content**: Each page should have unique titles and descriptions
2. **Missing Alt Text**: All images should have descriptive alt text
3. **Broken Internal Links**: Regularly check for 404 errors
4. **Slow Loading Speed**: Optimize images and minimize JavaScript
5. **Missing Mobile Optimization**: Ensure responsive design
6. **Outdated Information**: Keep contact details and business hours current
7. **Keyword Stuffing**: Use keywords naturally in content
8. **Ignoring Local SEO**: Include location-based keywords and information

---

*Last Updated: July 2024*
*Next Review: October 2024*