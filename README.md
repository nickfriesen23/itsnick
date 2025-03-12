# Personal Brand Website for itsnick.co

A React-based personal brand website for Nick, featuring a dynamic hero section, project showcase, consulting services, events, and web app integration capabilities.

## Features

- **Modern React Implementation**: Built with React 18, functional components, and hooks
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dynamic Content**: Interactive elements and animations throughout the site
- **Mustard & Medium Blue Theme**: Cohesive color scheme across all pages
- **Web App Integration**: Framework for embedding other web applications
- **Performance Optimized**: Fast loading and smooth animations

## Tech Stack

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation and routing
- **Styled Components**: For component-based styling
- **Framer Motion**: For animations and transitions
- **React Hook Form**: For form handling and validation
- **React Icons**: For iconography

## Project Structure

```
personal-brand-website/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── hero/         # Hero section components
│   │   ├── sections/     # Page section components
│   │   ├── ui/           # UI components (buttons, cards)
│   │   └── app-container/# Web app integration components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── context/          # Context providers
│   ├── styles/           # Global styles and theme
│   ├── utils/            # Utility functions
│   ├── data/             # Static data
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-brand-website.git
   cd personal-brand-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This site can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploying to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

## Web App Integration

The website includes a framework for embedding other web applications. To add a new app:

1. Add the app details to the `apps` object in `src/pages/AppPage.jsx`:
   ```javascript
   const apps = {
     // Existing apps...
     newApp: {
       title: 'New App Name',
       description: 'Description of the new app',
       url: 'https://newapp.itsnick.co',
       externalUrl: 'https://newapp.itsnick.co'
     }
   }
   ```

2. The app will be accessible at `/app/newApp`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from the original itsnick.co website
- Icons provided by React Icons and Font Awesome
- Animations powered by Framer Motion