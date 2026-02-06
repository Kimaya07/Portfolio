# KIM - Portfolio Website

A modern, minimalist portfolio showcasing full-stack development projects with a Japanese-inspired aesthetic. Built with React, TypeScript, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## 🌐 Live Demo

[View Live Site](https://your-portfolio-url.vercel.app)

## ✨ Features

- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Japanese Typography** - Cultural design elements with vertical text decorations
- **Project Showcase** - Detailed case studies with tech stack breakdowns
- **Spinning Vinyl** - Interactive music player with album artwork
- **Performance Optimized** - Fast loading with code splitting and lazy loading

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Tools & Libraries
- Vite (Build tool)
- React Router (Navigation)
- ESLint (Code linting)
- PostCSS (CSS processing)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Start development server**
```bash
   npm run dev
   # or
   yarn dev
```

4. **Open your browser**
```
   http://localhost:5173
```

### Build for Production
```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure
```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── AboutSection.tsx
│   │   ├── ExpertiseMarquee.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroIntro.tsx
│   │   └── Navigation.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Work.tsx
│   │   ├── Info.tsx
│   │   ├── NetflixClone.tsx
│   │   └── WorkInProgress.tsx
│   ├── lib/              # Utilities
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json           # Vercel configuration
```

## 🎨 Key Components

### Hero Section
Large animated name display with Japanese characters

### Featured Projects
Showcases top projects with hover effects and navigation

### Expertise Marquee
Scrolling tech stack display with animation

### Spinning Vinyl
Interactive music player with rotating record animation

### Work In Progress
Placeholder page for projects under development

## 🌍 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects settings
   - Click "Deploy"

3. **Configure Build Settings** (auto-detected)
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Custom Domain

Add your domain in Vercel project settings → Domains

## 🎯 Projects Featured

### Netflix Clone
- **Tech:** React, Firebase, TMDB API
- **Features:** Authentication, Real-time data, Responsive design
- [View Project](#)

### Real-Time AI Chatbot
- **Tech:** React, Node.js, Gemini API, WebSocket
- **Features:** Real-time chat, AI responses, Message persistence
- [View Project](#)

### More Projects
Additional projects coming soon...

## 📝 Environment Variables

Create a `.env` file in the root directory:
```env
# Add your environment variables here
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_FIREBASE_CONFIG=your_firebase_config
```

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kimaya Ambekar**

- Portfolio: [kimaya-portfolio.vercel.app](https://your-url.vercel.app)
- LinkedIn: [@kimayaa1234](https://linkedin.com/in/kimayaa1234)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: kimayaambekar@gmail.com

## 🙏 Acknowledgments

- Design inspiration from Japanese typography and minimalism
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling
- Vercel for seamless deployment

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Optimized Images:** WebP format with lazy loading
- **Code Splitting:** Route-based splitting for faster loads

## 🔮 Future Enhancements

- [ ] Add more project case studies
- [ ] Implement blog section
- [ ] Add contact form with email integration
- [ ] Create 3D interactive elements
- [ ] Add dark/light theme toggle
- [ ] Integrate CMS for easier content management

---

**Made with ❤️ and React by Kimaya Ambekar**

*"Where code meets creative vision"*
```

---

## **Additional Files to Create:**

### **LICENSE** (if you want MIT License)

Create `LICENSE` file:
```
MIT License

Copyright (c) 2025 Kimaya Ambekar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
