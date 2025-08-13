# Deployment Guide - Lord Journals Next.js

## 🚀 Quick Deploy Options

### 1. **Vercel (Recommended - Zero Configuration)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts and your site will be live in minutes!
```

### 2. **Netlify (Static Hosting)**
```bash
# Build the project
npm run build

# The 'out' folder contains your static files
# Drag and drop the 'out' folder to Netlify
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --dir=out --prod
```

### 3. **GitHub Pages**
```bash
# Build the project
npm run build

# Push the 'out' folder to a gh-pages branch
# Or use gh-pages package:
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d out"
```

### 4. **AWS S3 + CloudFront**
```bash
# Build the project
npm run build

# Upload 'out' folder contents to S3 bucket
# Configure CloudFront for CDN
```

### 5. **Traditional Web Hosting**
```bash
# Build the project
npm run build

# Upload all files from 'out' folder to your web server
# Ensure .htaccess or web.config is configured for SPA routing
```

## 📁 What Gets Deployed

After running `npm run build`, the `out/` folder contains:

```
out/
├── index.html              # Home page
├── 404.html               # 404 error page
├── accessibility/          # Accessibility page
├── login/                 # Login page
├── _next/                 # Next.js assets
├── sitemap.xml            # SEO sitemap
├── robots.txt             # SEO robots file
├── manifest.json          # PWA manifest
└── [other assets]         # Images and static files
```

## 🔧 Build Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production Build
npm run build        # Creates optimized build in 'out' folder

# Production Server (if not using static export)
npm start           # Start production server
```

## 🌐 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## 📱 PWA Configuration

The project includes:
- ✅ Service Worker ready
- ✅ App manifest
- ✅ Offline capability support
- ✅ Mobile-responsive design

## 🔍 SEO Features

- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Structured data ready

## 🚨 Common Issues & Solutions

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Routing Issues
- Ensure all pages are in the `pages/` directory
- Check file naming conventions
- Verify export configuration in `next.config.js`

### Performance Issues
- Images are optimized automatically
- Code splitting is enabled
- Bundle analysis available with `npm run build`

## 📊 Performance Monitoring

The app includes built-in performance monitoring:
- Page load times
- Core Web Vitals
- Navigation performance

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 Domain Configuration

### Custom Domain Setup
1. **Vercel**: Add domain in dashboard
2. **Netlify**: Configure in site settings
3. **Traditional Hosting**: Update DNS records

### SSL/HTTPS
- **Vercel/Netlify**: Automatic SSL
- **Traditional Hosting**: Install SSL certificate
- **CloudFlare**: Enable SSL/TLS encryption

## 📈 Analytics & Monitoring

### Google Analytics
Add to `pages/_document.js`:
```jsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

### Performance Monitoring
- Built-in Next.js analytics
- Core Web Vitals tracking
- Custom performance metrics

## 🎯 Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test PWA functionality
- [ ] Monitor performance metrics
- [ ] Set up error tracking
- [ ] Configure analytics
- [ ] Test contact forms
- [ ] Verify SSL/HTTPS
- [ ] Check loading speeds

## 📞 Support

For deployment issues:
1. Check build logs: `npm run build`
2. Verify Next.js configuration
3. Check file permissions
4. Review hosting provider requirements

---

**Your Next.js project is ready for deployment!** 🎉
