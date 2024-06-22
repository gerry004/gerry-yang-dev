import pianistHero from "../assets/gy-pianist-hero.png";
import kreohInsights from "../assets/kreoh-insights.png";

const PROJECTS = [
  {
    title: "Kreoh",
    image: kreohInsights,
    link: "https://www.isef.ie/isef-2022",
    description:
      "Kreoh is an educational platform that enables students to learn faster by facilitating code reviews between peers, and provides lecturers with granular data for accurate and efficient grading.",
    points: [
      "The platform handled 3,000+ changes and 600+ code reviews from over 100 students.",
      "Implemented a live chat feature using web sockets for instant feedback and faster code reviews.",
      "Automated weekly insights for progress tracking using cron jobs.",
      "Desgined the dashboard UI and maintained a SQL database.",
      "Built a roles-based user authentication system.",
      "Worked with external API integrations such as Github and Sendgrid.",
    ],
    skills: [
      "Vue.js",
      "JavaScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "pgAdmin",
    ],
  },
  {
    title: "Pianist Portfolio",
    image: pianistHero,
    link: "https://gerry004.github.io/gerry-yang-pianist/",
    description:
      "A collection of my most outstanding recordings and a timeline of the successes, highlights, and achievements on my musical journey.",
    points: [
      "Built an audio player where you could skip to a certain spot in a piece.",
      "Designed a piano sidebar where the keys look like they're being pressed when you hover over the corresponding sections.",
    ],

    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Predicting Housing Prices",
    link: "https://github.com/gerry004/Predict-House-Prices",
    description:
      "A project to help me learn about machine learning processes and how they can be applied in the real world to predict housing prices.",
    points: [
      "Cleaned and analysed housing price data with over 10,000 records.",
      "Compared the accuracy of 8 different machine learning models.",
      "Implemented the best machine learning model with an accuracy of 96%.",
      "Created graphs to visualise the results using matplotlib.",
    ],
    skills: ["Python", "pandas", "sklearn", "matplotlib"],
  },
  {
    title: "IMC Prosperity Challenge",
    link: "https://www.imc.com/us/news/prosperity-the-worlds-most-elaborate-trading-challenge/",
    description:
      "Participated in a global 10-day algorithmic trading challenge, implemented six different algorithms based on changing trading strategies - placed 856th of 10,000+ teams.",
    points: [],
    skills: ["Python"],
  },
];

export default PROJECTS;
