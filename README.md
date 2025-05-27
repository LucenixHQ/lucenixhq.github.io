# LucenixHQ Landing Page

A modern, professional landing page for LucenixHQ, featuring dynamic content, micro animations, and a responsive design that aligns with the LucenixHQ brand identity.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Customization Guide](#customization-guide)
5. [Hosting Options](#hosting-options)
   - [Free Hosting Options](#free-hosting-options)
   - [Low-Cost Hosting Options](#low-cost-hosting-options)
6. [Domain Integration](#domain-integration)
   - [Connecting lucenixhq.com](#connecting-lucenixhqcom)
7. [Maintenance and Updates](#maintenance-and-updates)

## Project Overview

This landing page was created for LucenixHQ to showcase their AI technology, SaaS products, and upcoming offerings. The design follows modern web standards with a focus on visual appeal, interactivity, and brand consistency.

The landing page includes:
- Responsive design that works on all devices
- Brand-aligned color scheme and visual elements
- Interactive features and micro animations
- Editable "Coming Soon" section for upcoming products
- Contact form with validation
- Social media integration

## Features

### Visual Elements
- **Brand-Aligned Design**: Uses LucenixHQ's blue color palette (#0A2463, #3E92CC) throughout
- **Custom Images**: Generated images that match the brand aesthetic
- **Micro Animations**: Subtle animations for enhanced user experience
- **Responsive Layout**: Adapts to all screen sizes from mobile to desktop

### Interactive Elements
- **Smooth Scrolling Navigation**: Easy navigation between sections
- **Editable Content**: "Coming Soon" section allows content editing
- **Form Validation**: Contact form with client-side validation
- **Hover Effects**: Interactive elements respond to user interaction
- **Back to Top Button**: Easy navigation for longer scrolling

### Sections
- Hero section with tagline and call-to-action
- Services overview
- About LucenixHQ
- Coming Soon products (LucenixHQ Mobile, LCNXAUTO)
- Contact form
- Footer with social links

## File Structure

```
lucenixhq_project/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and other assets
│   ├── icon.png        # LucenixHQ icon
│   ├── hero-image.png  # Hero section image
│   ├── about-image.png # About section image
│   ├── mobile-coming-soon.png # LucenixHQ Mobile image
│   └── auto-coming-soon.png   # LCNXAUTO image
└── README.md           # This documentation
```

## Customization Guide

### Modifying Content

1. **Text Content**: Edit the text directly in the `index.html` file.
2. **Images**: Replace images in the `assets` folder with your own, keeping the same filenames.
3. **Colors**: Modify the color variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-dark: #0A2463;
    --primary-light: #3E92CC;
    --secondary: #1E5F8C;
    --accent: #4CB5F5;
    --background: #F7F9FC;
    --text-dark: #1A1A2E;
    --text-light: #FFFFFF;
}
```

### Adding New Sections

1. Follow the HTML structure pattern in `index.html`
2. Add corresponding CSS in `styles.css`
3. If needed, add JavaScript functionality in `script.js`

### Modifying the Coming Soon Section

The "Coming Soon" section is designed to be editable directly from the browser:

1. Click the "Edit" button next to any product description
2. Modify the text in the textarea that appears
3. Click "Save" to update the content or "Cancel" to discard changes

## Hosting Options

### Free Hosting Options

#### 1. GitHub Pages

**Pros:**
- Completely free
- Simple deployment via Git
- Reliable uptime
- HTTPS included

**Steps:**
1. Create a GitHub account if you don't have one
2. Create a new repository named `lucenixhq.github.io`
3. Upload all files from this project to the repository
4. Your site will be available at `https://lucenixhq.github.io`

#### 2. Netlify (Free Tier)

**Pros:**
- Free for personal projects
- Continuous deployment from Git
- Custom domain support
- HTTPS included
- Form handling built-in

**Steps:**
1. Create a Netlify account
2. Click "New site from Git"
3. Connect to your GitHub/GitLab/Bitbucket repository
4. Select the repository with your landing page files
5. Configure build settings (not needed for this static site)
6. Deploy the site

#### 3. Vercel (Free Tier)

**Pros:**
- Free for personal projects
- Excellent performance
- Continuous deployment
- Preview deployments
- HTTPS included

**Steps:**
1. Create a Vercel account
2. Import your project from Git
3. Configure project settings
4. Deploy

### Low-Cost Hosting Options

#### 1. DigitalOcean App Platform ($5/month)

**Pros:**
- Simple deployment
- Reliable infrastructure
- Scalable if needed
- Good performance

**Steps:**
1. Create a DigitalOcean account
2. Create a new App
3. Connect to your repository or upload files
4. Configure as a static site
5. Deploy

#### 2. AWS Amplify (Pay as you go, typically $1-5/month for small sites)

**Pros:**
- Enterprise-grade infrastructure
- Global CDN
- Continuous deployment
- Advanced features available

**Steps:**
1. Create an AWS account
2. Go to AWS Amplify console
3. Connect to your repository
4. Configure build settings
5. Deploy

## Domain Integration

### Connecting lucenixhq.com

Since you've already purchased the domain lucenixhq.com, you'll need to connect it to your chosen hosting provider. Here's how to do it with different hosting options:

#### General Steps (for any hosting provider):

1. Log in to your domain registrar (where you purchased lucenixhq.com)
2. Navigate to the DNS settings for your domain
3. You'll need to update either:
   - Name servers (if using the hosting provider's DNS)
   - DNS records (if keeping DNS with your registrar)

#### For GitHub Pages:

1. In your GitHub repository settings, go to "Pages"
2. Under "Custom domain", enter `lucenixhq.com`
3. At your domain registrar, add these DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: lucenixhq.github.io

#### For Netlify:

1. In Netlify, go to your site settings
2. Navigate to "Domain management" → "Add custom domain"
3. Enter `lucenixhq.com` and follow the verification steps
4. At your domain registrar, either:
   - Update nameservers to Netlify's (recommended):
     - dns1.p01.nsone.net
     - dns2.p01.nsone.net
     - dns3.p01.nsone.net
     - dns4.p01.nsone.net
   - Or add DNS records:
     - Type: A, Name: @, Value: Netlify's load balancer IP (provided in Netlify)
     - Type: CNAME, Name: www, Value: your-netlify-site-name.netlify.app

#### For Vercel:

1. In Vercel, go to your project settings
2. Navigate to "Domains"
3. Add `lucenixhq.com` and follow the verification steps
4. At your domain registrar, either:
   - Update nameservers to Vercel's (if provided)
   - Or add DNS records:
     - Type: A, Name: @, Value: 76.76.21.21
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### HTTPS Setup

Most modern hosting providers automatically provision SSL certificates for your domain. If your hosting provider doesn't automatically set up HTTPS:

1. Check if your hosting provider offers free Let's Encrypt integration
2. Follow their specific instructions to enable HTTPS
3. Ensure all resources load over HTTPS to avoid mixed content warnings

## Maintenance and Updates

### Regular Maintenance

1. **Content Updates**: Edit the HTML files directly to update content
2. **Image Updates**: Replace images in the assets folder as needed
3. **Coming Soon Products**: Use the built-in edit functionality or update the HTML

### Adding New Features

To add new features or sections:

1. Follow the existing HTML structure patterns
2. Add corresponding CSS styles
3. Implement any required JavaScript functionality
4. Test thoroughly across different devices and browsers

### Performance Optimization

The landing page is already optimized for performance, but if you need further optimization:

1. Compress images further using tools like TinyPNG
2. Minify CSS and JavaScript files
3. Consider implementing lazy loading for additional images
4. Use browser caching for static resources

---

For any questions or assistance with this landing page, please use the contact form on the site or reach out through LucenixHQ's social media channels.
