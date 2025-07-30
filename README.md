# Journey of You

Corporate website for Journey of You company featuring job listings and company culture.

## Features

- 🏢 Company information and culture
- 💼 Career opportunities with job listings
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 14

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/waveup-al/journey-of-you.git
cd journey-of-you
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com)
3. Sign up/Login with your GitHub account
4. Click "New Project"
5. Import the `journey-of-you` repository
6. Configure project settings (default settings work fine)
7. Click "Deploy"

### Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"
4. Choose GitHub and select `journey-of-you` repository
5. Set build command: `npm run build`
6. Set publish directory: `out`
7. Add environment variable: `NEXT_EXPORT=true`
8. Click "Deploy site"

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `.next` folder
3. Upload to your hosting provider

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── careers/        # Careers page with job listings
│   ├── contact/        # Contact page
│   ├── culture/        # Company culture page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Header.tsx      # Header component
├── public/             # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.