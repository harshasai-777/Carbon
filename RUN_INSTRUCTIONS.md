# 🌍 EcoSync - Installation & Run Instructions

## Project Overview

**EcoSync** is an intelligent, AI-powered carbon footprint tracker built with modern web technologies. Calculate your annual CO₂e emissions in 2 minutes, receive personalized sustainability recommendations, and track your environmental impact over time.

### Key Features
✅ **Instant Carbon Footprint Calculation** - Answer 6 simple questions  
✅ **AI-Powered Recommendations** - Ranked by real environmental impact  
✅ **Privacy-First Design** - 100% runs in your browser, zero data collection  
✅ **Beautiful Modern UI** - Gradient-based design with smooth animations  
✅ **Goal Tracking** - Set targets and monitor progress  
✅ **Accessibility First** - WCAG 2.1 AA compliant  

---

## System Requirements

- **Node.js**: 20.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)
- **OS**: macOS, Linux, or Windows
- **Browser**: Modern browser with ES2020+ support

---

## Installation Steps

### 1. Clone or Extract the Repository

```bash
cd EcoSync
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages including:
- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zod** - Data validation
- **Recharts** - Data visualization

### 3. Verify Installation

```bash
npm run typecheck
```

This ensures all TypeScript files are valid and type-safe.

---

## Running the Application

### Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

Features during development:
- 🔥 **Hot Module Replacement** - Changes reload instantly
- 🐛 **Developer Error Overlay** - Clear error messages
- ⚡ **Optimized Bundling** - Fast compilation
- 📱 **Responsive Design** - Test on any screen size

### Production Build

Build optimized production assets:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Available Scripts

### Development & Debugging
```bash
npm run dev          # Start development server (localhost:3000)
npm run typecheck    # Verify TypeScript type safety
npm run lint         # Check code quality with ESLint
```

### Testing
```bash
npm run test              # Run unit tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report
npm run test:e2e         # Run end-to-end tests
```

### Code Quality
```bash
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
```

### Production
```bash
npm run build        # Build optimized production bundle
npm start            # Serve production build locally
```

---

## Project Structure

```
ecosync/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── page.tsx                  # Landing page
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── globals.css               # Global styles & design tokens
│   │   ├── calculator/page.tsx       # Carbon calculator page
│   │   └── dashboard/page.tsx        # Results dashboard page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx        # Top navigation (EcoSync branding)
│   │   │   └── SiteFooter.tsx        # Footer with social links
│   │   │
│   │   ├── calculator/
│   │   │   ├── CalculatorForm.tsx    # Main form component
│   │   │   ├── validation.ts         # Zod schemas for form data
│   │   │   └── steps/                # 6-step form components
│   │   │       ├── RegionStep.tsx
│   │   │       ├── TransportStep.tsx
│   │   │       ├── HomeStep.tsx
│   │   │       ├── FoodStep.tsx
│   │   │       ├── ConsumptionStep.tsx
│   │   │       └── ReviewStep.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardView.tsx     # Main dashboard layout
│   │   │   ├── StatCard.tsx          # KPI cards
│   │   │   ├── ComparisonCard.tsx    # Regional comparison
│   │   │   ├── GoalTracker.tsx       # Progress tracking
│   │   │   └── TipCard.tsx           # Recommendation cards
│   │   │
│   │   ├── charts/
│   │   │   ├── CategoryBarChart.tsx  # Category breakdown bar chart
│   │   │   ├── CategoryDonutChart.tsx # Pie chart view
│   │   │   ├── HistoryTrendChart.tsx # Trend over time
│   │   │   └── ChartFrame.tsx        # Chart wrapper component
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button component
│   │       ├── Card.tsx              # Card container
│   │       ├── Field.tsx             # Form field wrapper
│   │       ├── SelectField.tsx       # Dropdown component
│   │       ├── Checkbox.tsx          # Checkbox input
│   │       ├── Icon.tsx              # Icon system
│   │       └── ...                   # Other UI components
│   │
│   ├── lib/
│   │   ├── calculator.ts             # Core emission calculation engine
│   │   ├── schemas.ts                # Zod validation schemas
│   │   ├── emission-factors.ts       # CO₂e factors by region & type
│   │   ├── tips-engine.ts            # AI recommendation engine
│   │   ├── comparisons.ts            # Benchmark comparisons
│   │   ├── storage.ts                # localStorage utilities
│   │   ├── format.ts                 # Number & unit formatting
│   │   ├── goal.ts                   # Goal tracking logic
│   │   └── breakdown.ts              # Category breakdown logic
│   │
│   ├── test/
│   │   └── setup.ts                  # Test configuration
│   │
│   ├── types/
│   │   └── global.d.ts               # Global type definitions
│   │
│   └── middleware.ts                  # Security headers & CSP nonce
│
├── Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── next.config.ts                # Next.js configuration
│   ├── tailwind.config.ts            # Tailwind CSS tokens
│   ├── vitest.config.ts              # Unit test configuration
│   └── postcss.config.mjs            # PostCSS plugins
│
├── Documentation
│   ├── README.md                     # Project overview
│   ├── METHODOLOGY.md                # Emission factors & methodology
│   └── RUN_INSTRUCTIONS.md           # This file
│
└── Public Assets
    └── (self-hosted fonts & static files)
```

---

## UI/UX Enhancements in EcoSync

### 🎨 Modern Design System

**Color Palette:**
- **Primary**: Vibrant Teal (#0891b2) - Main brand color
- **Secondary**: Cyan (#06b6d4) - Accents and highlights
- **Accent**: Emerald (#10b981) - Success states and nature
- **Surface**: Light Blue (#f0f9ff) - Clean, professional background
- **Ink**: Deep Blue (#0c2f44) - High-contrast readable text

**Typography:**
- **Display Font**: Sora - Modern, friendly headings
- **Body Font**: Inter - Clean, professional body text
- **Sizing**: Responsive scales from mobile to desktop

### ✨ Visual Enhancements

1. **Gradient Backgrounds**
   - Subtle animated gradients in hero section
   - Smooth color transitions for depth
   - Glassmorphism effects on cards

2. **Interactive Elements**
   - Smooth hover states with scale transforms
   - Refined focus indicators for accessibility
   - Loading animations and transitions

3. **Information Architecture**
   - Clear visual hierarchy with progressive disclosure
   - Icon-based categorization for quick scanning
   - Card-based layouts for content organization

4. **Mobile Responsiveness**
   - Touch-friendly interface (44px+ targets)
   - Adaptive typography and spacing
   - Optimized gesture navigation

### 🔒 Security & Privacy

- **CSP Nonce**: Fresh nonce generated per request
- **No External Requests**: Self-hosted fonts only
- **localStorage Validation**: Zod validation on every read
- **No Backend**: All processing happens in your browser

---

## Accessing the Application

### Home Page
- **URL**: http://localhost:3000
- **Content**: Feature overview, how-to guide, trust information

### Carbon Calculator
- **URL**: http://localhost:3000/calculator
- **Content**: 6-step interactive form
- **Regions**: US, UK, EU, India, Global
- **Output**: Annual CO₂e by category

### Dashboard
- **URL**: http://localhost:3000/dashboard
- **Content**: Results visualization, recommendations, goal tracking
- **Features**: Charts, comparisons, tips, progress tracking

---

## Testing

### Unit Tests
```bash
npm run test
```
Runs 54+ unit tests covering:
- Emission calculations
- Data validation schemas
- Tips engine logic
- Storage utilities
- Comparison functions

### Watch Mode (During Development)
```bash
npm run test:watch
```
Tests rerun when files change.

### Coverage Report
```bash
npm run test:coverage
```
Generates detailed coverage analysis.

### End-to-End Tests
```bash
npm run test:e2e
```
Tests complete user flows with Playwright.

---

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:

```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Node/npm Version Issues
Check your versions:

```bash
node --version   # Should be 20.x or higher
npm --version    # Should be 9.x or higher
```

Update Node if needed from https://nodejs.org

### Build Errors
Clear cache and reinstall:

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Type Errors
Run type checking:

```bash
npm run typecheck
```

Check for TypeScript errors in `src/` directory.

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Manual Server
```bash
npm run build
npm start
```

---

## Environment Variables

No environment variables are required for local development. All data is processed client-side.

---

## Code Quality Standards

All code follows these practices:
- ✅ TypeScript strict mode enabled
- ✅ ESLint for code quality
- ✅ Prettier for consistent formatting
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ 90%+ test coverage
- ✅ Component-driven development
- ✅ Responsive design by default

---

## Performance Optimizations

- 📦 Code splitting with dynamic imports
- 🚀 Server-side rendering for fast first page load
- 🎯 Image and font optimization
- ⚡ Lazy-loaded charts on dashboard
- 📊 Efficient state management
- 🔄 Memoized calculations

---

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Support & Documentation

- **Methodology**: See [METHODOLOGY.md](./METHODOLOGY.md) for emission factor details
- **Issues**: Check GitHub issues for known problems
- **Contributing**: Follow existing code style and add tests

---

## License

MIT License - See [LICENSE](./LICENSE) file for details

---

## Quick Start Summary

```bash
# 1. Install
npm install

# 2. Run development server
npm run dev

# 3. Open browser
open http://localhost:3000

# 4. Start calculating your carbon footprint!
```

**Questions?** Check the README.md or METHODOLOGY.md files for more information.

Happy calculating! 🌍💚
