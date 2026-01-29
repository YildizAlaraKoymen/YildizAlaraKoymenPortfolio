# Yıldız Alara Köymen Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://yildiz-alara-koymen.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra--UI-2.3.2-teal.svg)](https://chakra-ui.com/)

A modern, responsive personal portfolio website built with React and Chakra UI, showcasing my projects, skills, and providing a contact form for professional inquiries.

🌐 **Live Site**: [yildizalarakoymen.vercel.app](https://yildiz-alara-koymen.vercel.app/)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **UI Library**: Chakra UI 2.3.2
- **Form Management**: Formik 2.2.9
- **Form Validation**: Yup 0.32.11
- **Animation**: Framer Motion 7.3.5
- **Email Service**: EmailJS 4.4.1
- **Icons**: Font Awesome 6.2.0
- **Testing**: React Testing Library, Jest

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YildizAlaraKoymen/YildizAlaraKoymenPortfolio.git
   cd YildizAlaraKoymenPortfolio/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `portfolio` directory with your EmailJS credentials:
   ```env
   REACT_APP_SERVICE_ID=your_service_id
   REACT_APP_TEMPLATE_ID=your_template_id
   REACT_APP_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
YildizAlaraKoymenPortfolio/
├── portfolio/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.js
│   │   │   ├── LandingSection.js
│   │   │   ├── ProjectsSection.js
│   │   │   ├── ContactMeSection.js
│   │   │   ├── Footer.js
│   │   │   ├── Card.js
│   │   │   ├── Alert.js
│   │   │   └── FullScreenSection.js
│   │   ├── context/         # React context providers
│   │   │   └── alertContext.js
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useSubmit.js
│   │   ├── images/          # Image assets
│   │   ├── App.js           # Main app component
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── README.md
└── README.md
```

## 🎨 Sections

### Landing Section
- Introduction with avatar
- Personal greeting and title
- Clean, centered layout

### Projects Section
Featured projects include:
- **DynaZOR**: Cloud-based scheduling and rendezvous system using AWS services
- **Human Activity Recognition (HAR) System**: Edge-computable wearable sensor system (graduation project)

### Contact Section
- Fully validated contact form with Formik & Yup
- Email integration via EmailJS
- Form types: Freelance projects, open-source consultancy, or general inquiries
- Real-time form validation

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Create an email template
4. Copy your credentials to the `.env` file

### Customization
- Update project information in `src/components/ProjectsSection.js`
- Modify personal information in `src/components/LandingSection.js`
- Add images to `src/images/`
- Customize colors and theme in component files

## 📦 Deployment

The portfolio is deployed on Vercel. To deploy your own version:

1. Push your changes to GitHub
2. Import the project to [Vercel](https://vercel.com/)
3. Configure environment variables in Vercel dashboard
4. Deploy!

## 👤 Author

**Yıldız Alara Köymen**

- GitHub: [@YildizAlaraKoymen](https://github.com/YildizAlaraKoymen)
- Portfolio: [yildizalarakoymen.vercel.app](https://yildizalarakoymen.vercel.app)

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
