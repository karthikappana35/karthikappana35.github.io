# GitHub Pages Deployment Guide

This portfolio is configured for deployment to GitHub Pages using Next.js static export.

## Quick Setup

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to repository Settings → Pages
   - Source: GitHub Actions
3. **Automatic Deployment**: The workflow will automatically build and deploy on every push to main/master

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the static site
npm run deploy

# The 'out' folder contains your static site
# Upload the contents of 'out' folder to your GitHub Pages
```

## Configuration

- **Repository Name**: Update `basePath` and `assetPrefix` in `next.config.ts` if your repository name is different from `karthik-portfolio`
- **Custom Domain**: If using a custom domain, remove the `basePath` and `assetPrefix` configurations

## File Structure

```
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── out/                          # Built static files (auto-generated)
├── public/                       # Static assets
├── src/                         # Source code
└── next.config.ts               # Next.js configuration
```

## Troubleshooting

- **404 Errors**: Ensure `basePath` matches your repository name
- **Images Not Loading**: Check that `images.unoptimized: true` is set in next.config.ts
- **Build Failures**: Run `npm run build` locally to test before pushing
