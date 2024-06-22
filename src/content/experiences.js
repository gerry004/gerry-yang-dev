import kreohDemoDay from "../assets/kreoh-demo-day-center.jpg";
import kreohLogo from "../assets/kreoh-logo.png";

const EXPERIENCES = [
  {
    title: "Noloco - Software Engineer",
    link: "https://www.noloco.io/",
    description:
      "Noloco (YC S21) is a platform that allows businesses to build custom no-code apps from their data in minutes. As a software engineer, I shipped numerous sought out features that customers were excited to use.",
    points: [
      "Autocomplete Address Fields - suggests addresses from Google Maps as you type, to speed up form filling, reduce errors, and improve data accuracy.", 
      "E Signature Fields - enables collecting signatures directly within the app, with options to draw, type, or upload, on any device. Streamlining processes and eliminating the need for third party apps like DocuSign.",
      "User Workflow Actions - automatically send invitation emails and deactivate user accounts through workflows, effortlessly streamlining the onboarding and offboarding processes.",
      "Trial Limit on Apps - set trial end dates so that customers are encouraged to upgrade to a paid plan quicker.",
      "Record Coloring - assign colors to records based on conditions, allowing users to easily identify and categorize records at a glance, making the data more intuitive.",
      "View a Record Action - ability to quickly display only the required record data in a modal rather than redirecting users to the record page.",
      "Import Data By Value Instead of Ids - making imports more intuitive and user-friendly.",
      "Other improvements - mobile enhancements, fixing bugs, extending support of existing features.",
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "GaphQL",
      "Node.js",
      "MongoDB",
      "PostegreSQL",
    ],
  },
  {
    title: "Kreoh - Software Engineer, Co Founder",
    image: kreohLogo,
    link: "https://www.isef.ie/isef-2022",
    description:
      "Kreoh is an educational platform that enables students to learn faster by facilitating code reviews between peers, and provides lecturers with granular data for accurate and efficient grading.",
    points: [
      "We completed successful pilots in UCD and the University of Limerick - 3000+ changes and 600+ code reviews were pushed to the platform from over 100 students.",
      "3rd Prize Winners, awarded €1,500 at the Irish Student Entrepreneurship Forum (ISEF) Competition, competing with 40+ exciting student startups and pitching our startup to a panel of judges from ScaleIreland, Elkstone, and Zipp Mobility.",
      "Pioneer Tournament Finalist for ranking No.1 among 250+ startups from 50+ countries for 4 consecutive weeks.",
    ],
    skills: ["Startup", "Pitching", "Product"],
  },
  {
    title: "Patch 2021 - Alumni",
    image: kreohDemoDay,
    link: "https://www.joinpatch.org/",
    description:
      "1 of 24 chosen to participate in Patch - a 6 week summer accelerator for ambitious, curious, driven 16-21 year olds.",
    points: [
      "Developed the idea, conducted market research, and held customer discovery interviews.",
      "Built an MVP that 200+ beta testers used.",
      "Pitched our startup idea on Demo Day to an audience of 300+ engineers, founders, and investors.",
    ],
    skills: [
      "Startup",
      "Pitching",
      "Product",
      "Teamwork",
      "Market Research",
      "Customer Discovery",
    ],
  },
  {
    title: "Trinity SMF - Software Sector Analyst",
    link: "https://www.trinitysmf.com/",
    description:
      "Trinity Student Managed Fund is a student run investment fund with a real-life equity portfolio of €400k+ assets under management. As a software sector analyst, I attend weekly sector meetings where I learn about stocks, business valuation, risk, and investing. In a team of 3, we analysed and pitched Crowdstrike to the investment committee.",
    skills: ["Investing", "Pitching Stocks", "Teamwork"],
  },
  {
    title: "TES - Incubator Ambassador",
    link: "https://testrinity.com/",
    description:
      "Trinity Entrepreneurial Society runs programmes and events that foster innovation and aids students on all stages of their entrepreneurial journey. As an incubator ambassador, I ran the Incubator Pitch Night, compiling promising startup pitch decks and announcing speakers.",
    skills: ["Public Speaking"],
  },
];

export default EXPERIENCES;
