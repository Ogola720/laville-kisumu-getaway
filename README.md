
# 🏠 Laville Suites - Premium Accommodation Website

> **A modern, responsive web application for Laville Suites - a luxury 2-bedroom furnished apartment in Kisumu, Kenya**

[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🎨 Design System](#-design-system)
- [📱 Components Overview](#-components-overview)
- [🚀 Getting Started](#-getting-started)
- [📊 SEO & Performance](#-seo--performance)
- [🌍 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

---

## 🌟 Features

### 🏡 **Core Functionality**
- **Hero Section** with dynamic image carousel and call-to-action buttons
- **Interactive Gallery** with click-to-view functionality
- **Booking System** with date range picker and guest selection
- **Real-time Weather Widget** for Kisumu location
- **Interactive Map Integration** showing property location
- **Things to Do** section highlighting local attractions
- **Customer Reviews** with star ratings
- **Contact Information** with multiple communication channels

### 🎯 **User Experience**
- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Scrolling** - Navigation between sections
- **Loading States** - Skeleton loaders for better UX
- **SEO Optimized** - Meta tags, structured data, and social media cards

### 🔧 **Technical Features**
- **Type-Safe** - Full TypeScript implementation
- **Component-Based** - Modular and reusable components
- **Theme System** - CSS custom properties with Tailwind integration
- **Performance Optimized** - Code splitting and lazy loading
- **Accessibility** - WCAG compliant components

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality accessible components
- **CSS Custom Properties** - Theme system implementation
- **Lucide React** - Beautiful icon library

### **State Management & Data**
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form state management with validation
- **Zod** - Schema validation

### **Navigation & Routing**
- **React Router Dom** - Client-side routing
- **Smooth Scrolling** - Native scroll behavior implementation

### **Maps & Location**
- **Leaflet** - Interactive maps
- **OpenWeatherMap API** - Real-time weather data

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Component Tagger** - Development mode component identification

---

## 🏗️ Architecture

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── AmenitiesSection.tsx
│   ├── BookingSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx
│   ├── HeroSection.tsx
│   ├── LocationSection.tsx
│   ├── Navigation.tsx
│   ├── PaymentSection.tsx
│   ├── QuickInfoCards.tsx
│   ├── ReviewsSection.tsx
│   ├── SEOHead.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── ThingsToDoSection.tsx
│   ├── WeatherWidget.tsx
│   └── MapWidget.tsx
├── pages/               # Page components
│   ├── Index.tsx        # Main homepage
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx             # Root application component
```

### **Component Design Principles**
- **Single Responsibility** - Each component has one clear purpose
- **Composition over Inheritance** - Components are composed together
- **Props Interface** - Clear TypeScript interfaces for all props
- **Accessibility First** - ARIA labels and keyboard navigation

---

## 🎨 Design System

### **Color Palette**
The application uses a semantic color system defined in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --muted: 210 40% 96.1%;
  /* ... and more */
}
```

### **Typography**
- **Primary Font**: System font stack with serif fallback for brand name
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Scaling**: Fluid typography using Tailwind's responsive classes

### **Spacing & Layout**
- **Grid System**: CSS Grid and Flexbox for layouts
- **Responsive Breakpoints**: Mobile-first approach
- **Container Max-Width**: 7xl (80rem) for optimal readability

---

## 📱 Components Overview

### **Navigation Component**
- Sticky header with smooth scroll navigation
- Theme toggle integration
- Responsive mobile-friendly design
- Brand logo and call-to-action button

### **Hero Section**
- Dynamic image carousel with navigation dots
- Overlay content with booking call-to-action
- Responsive typography and button layouts
- Badge with rating information

### **Gallery Section**
- Grid layout with hover effects
- Click-to-view functionality
- Responsive image loading
- Camera icon overlay on hover

### **Booking System**
- Date range picker component
- Guest counter with increment/decrement
- Price calculation display
- Form validation and submission

### **Weather Widget**
- Real-time weather data from OpenWeatherMap
- Error handling with fallback data
- Icon representation based on weather conditions
- Loading states with skeleton UI

### **Map Integration**
- Interactive Leaflet map
- Custom markers for property location
- Responsive map container
- Integration with location data

### **Reviews Section**
- Star rating display
- Customer testimonials
- Responsive card layout
- Social proof elements

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm
- Git for version control

### **Installation**

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Development Commands**

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### **Environment Variables**
Create a `.env.local` file for local development:

```env
# OpenWeatherMap API Key (optional - fallback data provided)
VITE_WEATHER_API_KEY=your_api_key_here
```

---

## 📊 SEO & Performance

### **SEO Features**
- **Meta Tags**: Comprehensive meta description and keywords
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema for local business
- **Canonical URLs**: Proper URL canonicalization
- **Robots.txt**: Search engine crawling instructions

### **Performance Optimizations**
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Proper image formats and loading
- **Bundle Analysis**: Vite's built-in optimization
- **Caching Strategy**: Service worker ready architecture

### **Accessibility**
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Proper focus handling

---

## 🌍 Deployment

### **Lovable Platform**
The application is designed for deployment on the Lovable platform:

1. Click the **Publish** button in the Lovable editor
2. Configure custom domain in Project > Settings > Domains
3. Deploy with automatic SSL and CDN

### **Alternative Deployment**
The app can also be deployed to:
- **Vercel**: `npm run build` then deploy
- **Netlify**: Direct GitHub integration
- **AWS S3/CloudFront**: Static site hosting

---

## 🤝 Contributing

### **Development Guidelines**
- Follow TypeScript best practices
- Use semantic component naming
- Implement proper error boundaries
- Write accessible components
- Test on multiple devices and browsers

### **Code Style**
- ESLint configuration enforced
- Prettier for code formatting
- Conventional commit messages
- Component documentation in JSDoc format

---

## 📞 Contact & Support

**Laville Suites**
- 📧 Email: lavillesuites@gmail.com
- 📱 Phone: (+254) 726263281 / (+254) 732894577
- 📍 Location: Westwinds Court, Arina Estate, Kisumu, Kenya

---

## 📄 License

This project is proprietary to Laville Suites. All rights reserved.

---

<div align="center">

**Built with ❤️ using modern web technologies**

*Creating memorable home stays in the heart of Kisumu, Kenya*

</div>
