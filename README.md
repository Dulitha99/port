npm# 🛡️ Cyber Security Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a cyberpunk theme and interactive animations. Showcasing the expertise of Dulitha Wickramasinghe, a Cyber Security Analyst specializing in SOC operations, threat hunting, and penetration testing.

## 🚀 Features

- 🎨 **Cyberpunk-themed design** with neon colors and animations
- 📱 **Fully responsive** design for all devices
- 🌙 **Dark/Light theme** toggle with system preference detection
- ⚡ **Fast loading** with Vite and optimized builds
- 🔥 **Firebase integration** for blog management and authentication
- 📝 **Admin dashboard** for content management
- 🎭 **Smooth animations** with Framer Motion
- 🎯 **SEO optimized** with meta tags and structured data
- 📊 **Analytics ready** with Firebase Analytics
- 🔒 **Security focused** with proper error boundaries and validation
- ♿ **Accessibility** features and keyboard navigation
- 🎨 **PWA support** with offline capabilities
- 📈 **Performance monitoring** with Core Web Vitals tracking

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite with optimized configuration
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore, Authentication, Analytics)
- **Deployment**: Netlify with CI/CD
- **CMS**: Netlify CMS
- **Testing**: Vitest
- **Linting**: ESLint with TypeScript support
- **SEO**: React Helmet Async

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project
- Git

### Installation

1. **Clone the repository**
   ```bash
git clone <repository-url>
   cd cyber-security-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 🔧 Configuration

The application is pre-configured with Firebase credentials and contact information. All configuration is built into the application, so no additional setup is required.

## 🔐 Admin Access

The portfolio includes a secure admin panel for content management:

### Secret Admin Endpoint
- **URL**: `/admin-login`
- **Access**: Secret key-based authentication
- **Security**: Rate limiting, session management, and audit logging

### Admin Features
- Blog post management
- Content updates
- Analytics dashboard
- Security monitoring

### Security Measures
- Multiple secret keys for different access levels
- Account lockout after failed attempts
- Session expiration (24 hours)
- Comprehensive security logging
- Protected routes with authentication checks

**Note**: The admin panel is not publicly accessible and requires knowledge of the secret endpoint and authentication keys.

## 🔥 Firebase Setup

1. **Create a new Firebase project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Follow the setup wizard

2. **Enable Firestore Database**
   - Go to Firestore Database
   - Click "Create database"
   - Choose "Start in test mode" for development

3. **Enable Authentication**
   - Go to Authentication
   - Click "Get started"
   - Enable Email/Password provider

4. **Add your domain to authorized domains**
   - Go to Authentication > Settings > Authorized domains
   - Add your domain (localhost for development)

5. **Configuration is already set up**
   - The Firebase configuration is already built into the application
   - No additional configuration needed

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Deploy**
   - Netlify will automatically deploy on every push to main branch

### Other Platforms

The app can also be deployed to:
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm run test -- --watch
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── AdminDashboard.tsx
│   ├── BlogsPage.tsx
│   ├── ContactPage.tsx
│   ├── Education.tsx
│   ├── ErrorBoundary.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── NotFound.tsx
│   ├── PerformanceMonitor.tsx
│   ├── Projects.tsx
│   ├── SEO.tsx
│   └── Skills.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── firebase/          # Firebase configuration
│   ├── auth.ts
│   ├── blogService.ts
│   └── firebaseConfig.ts
├── App.tsx            # Main app component
├── index.tsx          # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    light: '#0A192F',
    dark: '#E0E0E0',
  },
  accent: {
    light: '#39FF14',
    dark: '#39FF14',
  },
  // ... more colors
}
```

### Fonts
The app uses three main fonts:
- **Inter**: For body text
- **Fira Code**: For code/monospace text
- **Orbitron**: For headings and cyberpunk elements

### Animations
Animations are powered by Framer Motion and can be customized in individual components.

## 🔒 Security Features

- **Secure Admin Access**: Secret endpoint-based admin authentication
- **Session Management**: Secure session handling with automatic expiration
- **Rate Limiting**: Login attempt limiting with account lockout
- **Security Logging**: Comprehensive audit trail for admin activities
- **Error Boundaries**: Graceful error handling throughout the application
- **Secure Firebase Configuration**: Production-ready Firebase setup
- **Input Validation**: Comprehensive input sanitization and validation
- **HTTPS Enforcement**: Secure connections in production
- **Content Security Policy**: Security headers for XSS protection

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences
- Focus management

## 📊 Performance Features

- Core Web Vitals monitoring
- Resource loading optimization
- Lazy loading for images and components
- Code splitting and chunking
- Service worker for caching
- Image optimization
- Bundle size optimization

## 🎯 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generation
- Canonical URLs
- Social media previews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test on multiple devices and browsers
- Follow security best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Firebase](https://firebase.google.com/) - Backend services
- [Vite](https://vitejs.dev/) - Build tool
- [Netlify](https://netlify.com/) - Hosting and deployment

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email: dulitha.wickramasinghe@example.com
- Connect on LinkedIn: [Dulitha Wickramasinghe](https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/)

## 🔗 Live Demo

Visit the live portfolio: [https://dulitha-portfolio.netlify.app](https://dulitha-portfolio.netlify.app)

---

**Made with ❤️ and lots of ☕ by Dulitha Wickramasinghe**

*Protecting digital assets through innovative security strategies and cutting-edge technology.*