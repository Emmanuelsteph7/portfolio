import {
  shopIt,
  shopit2,
  shopit3,
  shopit4,
  shopit5,
  hotel,
  hotel2,
  hotel3,
  hotel4,
  quizApp1,
  quizApp2,
  quizApp3,
  quizApp4,
  dashboard1,
  dashboard2,
  dashboard3,
  dashboard4,
} from "assets/index";

export const allData = [
  {
    id: "eming-shop-it",
    name: "Eming Shop IT",
    desc: "MERN Stack",
    category: "mern",
    about: [
      {
        paragraph: "Eming Shop IT is an E-commerce website.",
      },
    ],
    images: [
      {
        src: shopIt,
      },
      {
        src: shopit2,
      },
      {
        src: shopit3,
      },
      {
        src: shopit4,
      },
      {
        src: shopit5,
      },
    ],
    features: [
      {
        paragraph: "Responsive Website",
      },
      {
        paragraph: "Search and Filter",
      },
      {
        paragraph: "User Authentication",
      },
      {
        paragraph: "Reset Password",
      },
      {
        paragraph: "Forgot Password",
      },
      {
        paragraph: "Persist Cart Items in Local Storage",
      },
      {
        paragraph: "Update Profile",
      },
      {
        paragraph: "Pagination",
      },
    ],
    technologies: [
      "React Js",
      "Sass",
      "Redux",
      "Cloudinary",
      "Node Js",
      "Express Js",
      "JsonWebToken",
      "Mongo DB",
      "Github",
      "Heroku",
    ],
    links: {
      live: "https://eming-shop-it.herokuapp.com/",
      github: "https://github.com/Emmanuelsteph7/MERN_E-commerce",
    },
  },
  {
    id: "grand-hotel-landing-page",
    name: "Grand Hotel Landing Page",
    desc: "Web",
    category: "web",
    about: [
      {
        paragraph: "Grand Hotel Landing Page is a simple landing page.",
      },
    ],
    images: [
      {
        src: hotel,
      },
      {
        src: hotel2,
      },
      {
        src: hotel3,
      },
      {
        src: hotel4,
      },
    ],
    features: [
      {
        paragraph: "Responsive Website",
      },
      {
        paragraph: "Structured Layouts",
      },
      {
        paragraph: "Clean Animations",
      },
    ],
    technologies: [
      "React Js",
      "Sass",
      "CSS3 Animations",
      "HTML5",
      "Github",
      "Heroku",
    ],
    links: {
      live: "https://grand-hotel-landing-page.netlify.app/",
      github: "https://github.com/Emmanuelsteph7/Grand-Hotel_landing-Page",
    },
  },
  {
    id: "quiz-app",
    name: "Quiz App",
    desc: "Web",
    category: "web",
    about: [
      {
        paragraph:
          "Quiz App is an app that contains questions and answers. After submitting, your final result will be displayed.",
      },
    ],
    images: [
      {
        src: quizApp1,
      },
      {
        src: quizApp2,
      },
      {
        src: quizApp3,
      },
      {
        src: quizApp4,
      },
    ],
    features: [
      {
        paragraph: "Responsive Website",
      },
      {
        paragraph: "JavaScript Logic",
      },
      {
        paragraph: "Auto-check correct answer",
      },
      {
        paragraph: "Quiz Timer",
      },
    ],
    technologies: ["HTML", "CSS3", "Vanilla JavaScript", "ES6"],
    links: {
      live: "https://emmanuelsteph7.github.io/myQuizApp/dist/",
      github: "https://github.com/Emmanuelsteph7/myQuizApp",
    },
  },
  {
    id: "eming-dashboard",
    name: "Eming Dashboard",
    desc: "Web",
    category: "web",
    about: [
      {
        paragraph:
          "Eming Dashboard is a project that shows a simple landing dashboard page.",
      },
    ],
    images: [
      {
        src: dashboard1,
      },
      {
        src: dashboard2,
      },
      {
        src: dashboard3,
      },
      {
        src: dashboard4,
      },
    ],
    features: [
      {
        paragraph: "Responsive Website",
      },
      {
        paragraph: "Dark Mode",
      },
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    links: {
      live: "https://emmanuelsteph7.github.io/dashboard/",
      github: "https://github.com/Emmanuelsteph7/dashboard",
    },
  },
];
