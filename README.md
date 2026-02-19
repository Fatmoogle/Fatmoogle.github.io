# Alex Varela - Portfolio Website (React)

A modern, responsive portfolio website built with React and Vite, showcasing projects and skills as a Full Stack Web Developer.

## Features

- ⚛️ Built with React 18 and Vite
- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile-first approach)
- 🔄 React Router for smooth page transitions
- 💼 Project showcase with modal details
- 📧 Contact form with social links
- 🎭 Animated components and transitions
- ♿ Accessibility-focused design

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Styling:** Pure CSS with CSS Variables
- **Icons:** Custom SVG icons

## Project Structure

```
fatmoogle-portfolio-react/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd C:\Coding\fatmoogle-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Pages

### Home
Landing page with hero section, skills overview, and call-to-action buttons.

### About
Detailed information about education, technical skills, and personal interests.

### Projects
Showcase of web applications with:
- Project images and logos
- Interactive modal with details
- Live demo and GitHub links
- Technology tags
- Video demonstrations (where applicable)

### Contact
Contact form and social media links including:
- GitHub
- LinkedIn
- Email

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` to set the correct base:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/fatmoogle-portfolio-react/', // or '/' if using custom domain
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist` folder to GitHub Pages

### Alternative: Use Vercel or Netlify

Simply connect your GitHub repository to Vercel or Netlify for automatic deployments.

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #4DA8DA;
  --secondary-color: #6e7bf0;
  --accent-color: #01a9ff;
  /* ... more variables */
}
```

### Content
- Update project information in `src/pages/Projects.jsx`
- Modify personal information in `src/pages/About.jsx`
- Change contact details in `src/pages/Contact.jsx`

### Images
Place your images in the `public` folder or import them directly in components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with React Router
- Optimized production builds with Vite
- CSS animations with GPU acceleration
- Lazy loading for images

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] More interactive animations
- [ ] Testimonials section
- [ ] Resume download
- [ ] Form backend integration (EmailJS or similar)

## License

This project is open source and available under the MIT License.

## Contact

Alex Varela - Full Stack Web Developer
- GitHub: [@Fatmoogle](https://github.com/Fatmoogle)
- LinkedIn: [Alexander Varela](https://www.linkedin.com/in/alexander-varela-5a852295/)

---

Built with ❤️ using React and Vite

