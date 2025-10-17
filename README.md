# Salman Rafid Almnaseer - Portfolio

A modern, responsive portfolio website showcasing my software engineering projects, skills, and experience.

## Live Site

Visit the live portfolio at: [https://engsalman01.github.io/](https://engsalman01.github.io/)

## About

This portfolio features:
- Full-stack development projects including LogiTruck logistics platform
- AI/ML projects including bridge defect detection system
- Interactive UI with dark/light theme toggle
- Responsive design optimized for all devices
- Contact form for professional inquiries

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/EngSalman01/EngSalman01.github.io.git
cd EngSalman01.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

Every push to the `main` branch automatically triggers a deployment:

1. Make your changes locally
2. Commit and push to main:
\`\`\`bash
git add .
git commit -m "Update portfolio"
git push origin main
\`\`\`
3. GitHub Actions will automatically build and deploy your site
4. Visit your site at https://engsalman01.github.io/

### Manual Deployment

If you need to deploy manually:

1. Build the static export:
\`\`\`bash
npm run build
\`\`\`

2. The static files will be in the `out` directory
3. Push the `out` directory contents to the `gh-pages` branch

## Project Structure

\`\`\`
├── app/                  # Next.js app directory
│   ├── page.tsx         # Main portfolio page
│   ├── layout.tsx       # Root layout with theme provider
│   └── globals.css      # Global styles and theme variables
├── components/          # React components
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── theme-toggle.tsx
│   └── ui/             # shadcn/ui components
├── public/             # Static assets
│   ├── images/         # Profile and project images
│   └── documents/      # Resume PDF
└── next.config.mjs     # Next.js configuration
\`\`\`

## Contact


- **LinkedIn**: [linkedin.com/in/salmanrafid](https://www.linkedin.com/in/salmanrafid/)
- **GitHub**: [github.com/EngSalman01](https://github.com/EngSalman01)
- **Location**: Saudi Arabia

