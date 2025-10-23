# Genfrica

**Generate Quality Nigerian AI Images**

Genfrica is an AI-powered image generation platform that specializes in creating beautiful African and Nigerian-themed images. Turn your imagination into stunning visuals with our fast, simple, and ready-to-use AI image generator.

## Features

- 🎨 **AI Image Generation**: Create high-quality African-themed images from text prompts
- 🚀 **Fast Processing**: Quick image generation with modern AI technology
- 🎯 **Nigerian Focus**: Specialized in African culture, food, and lifestyle imagery
- 💳 **Credit System**: Buy AI credits to generate unlimited images
- 📱 **Responsive Design**: Beautiful, modern UI that works on all devices
- ⚡ **Turbopack**: Lightning-fast development with Next.js Turbopack

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [Radix UI](https://www.radix-ui.com/themes)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Build Tool**: Turbopack for faster development

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd genfrica
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── (home)/
│   │   ├── components/
│   │   │   └── ImagesGrid.tsx    # Grid display for generated images
│   │   └── page.tsx              # Main landing page
│   ├── layout.tsx                # Root layout with navbar and footer
│   └── globals.css               # Global styles
└── components/
    ├── CustomInput.tsx           # Custom input component
    ├── Footer.tsx                # Footer component
    └── Navbar.tsx                # Navigation component
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
