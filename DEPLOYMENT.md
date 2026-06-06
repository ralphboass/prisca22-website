# Deployment Guide - GitHub Pages

## Step-by-Step Instructions

### 1. Initialize Git Repository (if not already done)

```bash
cd /Users/boas/CascadeProjects/Persis\ 20/prisca22-website
git init
git add .
git commit -m "Initial commit - Prisca 22 birthday website"
```

### 2. Create GitHub Repository

1. Go to https://github.com/ralphboass
2. Click "New repository" (green button)
3. Name it: `prisca22-website`
4. Keep it **Private** (recommended for personal content)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/ralphboass/prisca22-website.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository: https://github.com/ralphboass/prisca22-website
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically deploy on the next push

### 5. Access Your Website

After the GitHub Action completes (takes 2-3 minutes), your site will be available at:

**https://ralphboass.github.io/prisca22-website/**

### 6. Future Updates

To update the website:

```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push
```

The site will automatically rebuild and deploy!

## Important Notes

- **Privacy**: The repository is private, but the GitHub Pages site is public by default
- **Custom Domain**: You can add a custom domain in Settings > Pages
- **Build Time**: First deployment takes 3-5 minutes
- **Audio Files**: Large audio files are included - make sure they're under 100MB each

## Troubleshooting

If the site doesn't load:
1. Check Actions tab for build errors
2. Ensure GitHub Pages is enabled in Settings
3. Wait 5 minutes after first push
4. Clear browser cache and try again

## Alternative: Make Repository Public

If you want to make the repository public:
1. Go to Settings > General
2. Scroll to "Danger Zone"
3. Click "Change visibility" > "Make public"
