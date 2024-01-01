# Victor Del Rio - Personal Website

A modern, responsive personal portfolio website built with React, TypeScript, and Material-UI (MUI). This website showcases my professional experience, projects, and provides a way for potential clients and employers to get in touch.

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Build Tool**: Create React App
- **Deployment**: AWS Amplify (configured)

## 📁 Project Structure

```
src/
  components/
    NavBar.tsx        # Responsive navigation component
    Footer.tsx        # Footer with social links
    ProjectCard.tsx   # Reusable project display component
  pages/
    Home.tsx          # Landing page with introduction
    About.tsx         # Bio, skills, and resume download
    Projects.tsx      # Portfolio projects showcase
    Contact.tsx       # Contact form with validation
  App.tsx             # Main app component with routing
  index.tsx           # Application entry point
```

## 🛠 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

## 🎨 Features

### ✅ Completed Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design using Material-UI components
- **Navigation**: Persistent header with smooth navigation between sections
- **Home Page**: Engaging landing page with introduction and call-to-action
- **About Page**: Professional bio, skills showcase, and resume download functionality
- **Projects Page**: Grid layout showcasing portfolio projects with links
- **Contact Page**: Functional contact form with validation and console logging
- **Footer**: Professional footer with social media links

### 🎯 Key Components

- **NavBar**: Responsive navigation with mobile hamburger menu
- **ProjectCard**: Reusable component for displaying project information
- **Footer**: Consistent footer across all pages
- **Contact Form**: Form validation with TypeScript interfaces

## 📄 Resume Integration

The website includes a resume download feature that's configured to work with AWS S3:

1. Upload your resume PDF to an S3 bucket
2. Make the bucket publicly accessible
3. Update the S3 URL in `src/pages/About.tsx`:
   ```typescript
   const resumeUrl = 'https://your-s3-bucket.s3.amazonaws.com/your-resume.pdf';
   ```

## 🚀 Deployment

### AWS Amplify Setup

1. **Connect to Git Repository**:
   - Go to AWS Amplify Console
   - Choose "New app" > "Host web app"
   - Connect your Git repository

2. **Build Settings**:
   The project uses standard Create React App build commands:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables** (if needed):
   - No environment variables required for basic setup
   - Add any API keys or external service URLs as needed

### Manual Build

For other hosting platforms:

```bash
# Build for production
npm run build

# The build folder contains the production-ready files
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **NavBar.tsx**: Change "Victor Del Rio" to your name
2. **About.tsx**: Update bio, skills, and resume URL
3. **Projects.tsx**: Replace with your actual projects
4. **Contact.tsx**: Update contact information
5. **Footer.tsx**: Update social media links

### Styling

The website uses a custom MUI theme defined in `App.tsx`. Modify the theme object to customize:

- Colors (primary, secondary)
- Typography
- Spacing
- Component overrides

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Update navigation in `NavBar.tsx`

## 📋 Available Scripts

- `npm start`: Runs the development server
- `npm run build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm run eject`: Ejects from Create React App (not recommended)

## 🐛 Development Notes

### Contact Form

The contact form currently logs submissions to the browser console. To integrate with a backend service:

1. Replace the console.log in `Contact.tsx` with an API call
2. Add error handling for network requests
3. Consider using services like Netlify Forms, Formspree, or AWS SES

### Performance

- All components are functional components using React Hooks
- Material-UI provides built-in performance optimizations
- Consider implementing React.memo() for frequently re-rendering components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TypeScript, and Material-UI
