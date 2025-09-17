# NexusAAI - AI Automation Agency Website

A modern React + TypeScript + Vite project for an educational AI automation agency website showcasing the FAST Framework for business automation.

## Project Overview

This website demonstrates AI automation solutions for businesses using the FAST Framework:
- **F**irst Principles: Root cause analysis and constraint identification
- **A**ction Oriented: 80-90% solutions in 1/10th time with 1-week sprints
- **S**econd Order Thinking: Consequence analysis and risk mitigation
- **T**riangulation: Solution validation through multiple reference points

## Technology Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type safety and better developer experience
- **Vite 7.1.5** - Lightning fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **Lucide React** - Modern icon library
- **EmailJS** - Client-side email service integration

## Key Features

- Interactive problem-to-solution flowchart
- AI tool database with filtering and search
- Educational case studies and implementation guides
- FAST Framework methodology demonstrations
- Business equation impact calculators (Profit = Revenue - Cost, etc.)
- Responsive design with mobile-first approach

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── data/            # Educational sample data
├── types/           # TypeScript type definitions
└── assets/          # Static assets
```

## Content Standards

- All content is educational and informative
- No fake case studies or customer testimonials
- Focus on demonstrating AI automation use cases
- References industry research and whitepapers
- Maintains strict educational compliance

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd NexusAAI

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

The project uses modern development practices:

- **Zero vulnerabilities** - All packages are up-to-date and secure
- **Fast refresh** - Instant updates during development
- **Type checking** - Full TypeScript support with strict mode
- **Code quality** - ESLint configuration for clean code

## Educational Focus

This project serves as an educational demonstration of:
- Modern React development practices
- AI automation business applications
- The FAST Framework methodology
- Business equation analysis (Profit, Growth, Value)
- Implementation planning and risk assessment

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## License

This is a personal project made for education purposes.

## Contributing

This is an educational project. Contributions should maintain the educational focus and compliance standards.
