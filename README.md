# $AB Token Website

Modern, responsive landing page for $AB Token built with Next.js and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This project is configured for GitHub Pages deployment.

### Deployment Steps

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Configure Base Path (if needed)**
   - If your repository name is not the root domain, update `next.config.js`:
   ```js
   basePath: '/YOUR_REPO_NAME',
   ```
   - If using a custom domain, remove the `basePath` line

4. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main` branch
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Ethers.js** - Web3 integration
- **Lucide React** - Icons

## 📁 Project Structure

```
├── app/              # Next.js app directory
│   ├── page.tsx      # Home page
│   ├── features/     # Features page
│   ├── pricing/      # Pricing page
│   ├── docs/         # Documentation page
│   └── ...
├── components/       # React components
├── lib/             # Utility functions
└── public/          # Static assets
```

## ⚙️ Configuration

### Base Path

If deploying to a subdirectory (e.g., `username.github.io/repo-name`), update `next.config.js`:

```js
basePath: '/repo-name',
```

### Custom Domain

To use a custom domain:
1. Remove `basePath` from `next.config.js`
2. Add your domain in GitHub Pages settings
3. Configure DNS records

## 📝 Notes

- Static export is enabled for GitHub Pages compatibility
- Images are unoptimized for static export
- All pages are pre-rendered at build time

