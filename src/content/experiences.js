import kreohDemoDay from '../assets/kreoh-demo-day-center.jpg';
import kreohLogo from '../assets/kreoh-logo.png';
import { useRef } from "react";

function Description(props) {
  const { description, points } = props;
  const pointsRef = useRef();

  const readMore = (e) => {
    e.preventDefault();
    const experience = pointsRef.current;
    const button = e.target;
    if (experience && experience.classList.contains("hidden")) {
      experience.classList.remove("hidden");
      button.textContent = "...Read Less";
    }
    else {
      experience.classList.add("hidden");
      button.textContent = "Read More...";
    }
  }

  return (
    <div>
      <p className="text-white my-2">{description}</p>
      <ul ref={pointsRef} className="hidden">
        {points.map((point) => (
          <li className="text-white list-disc list-inside" key={points.indexOf(point)}>{point}</li>
        ))}
      </ul>
      {points.length > 0 ? (
        <button onClick={readMore} className="text-[#D3D3D3] my-2">Read More...</button>) : null
      }
    </div>
  )
}

const experiences = [{
  title: 'Kreoh - Software Engineer, Co Founder',
  image: kreohLogo,
  link: 'https://www.isef.ie/isef-2022',
  description: <Description
    description={'Kreoh is an educational platform that brings software engineering best practises to university students.'}
    points={['We completed successful pilots in UCD and the University of Limerick - 3000+ changes and 600+ code reviews were pushed to the platform from over 100 students.',
      '3rd Prize Winners, awarded €1,500 at the Irish Student Entrepreneurship Forum (ISEF) Competition, competing with 40+ exciting student startups and pitching our startup to a panel of judges from ScaleIreland, Elkstone, and Zipp Mobility.',
      'Pioneer Tournament Finalist for ranking No.1 among 250+ startups from 50+ countries for 4 consecutive weeks.']} />,
  skills: ["Startup", "Pitching", "Product"]
},
{
  title: 'Patch 2021 - Alumni',
  image: kreohDemoDay,
  link: 'https://www.joinpatch.org/',
  description: <Description
    description={'1 of 24 chosen to participate in Patch - a 6 week summer accelerator for ambitious, curious, driven 16-21 year olds.'}
    points={['Developed the idea, conducted market research, and held customer discovery interviews.',
      'Built an MVP that 200+ beta testers used.',
      'Pitched our startup idea on Demo Day to an audience of 300+ engineers, founders, and investors.']} />,
  skills: ["Startup", "Pitching", "Product", "Teamwork", "Market Research", "Customer Discovery"]
},
{
  title: 'Trinity SMF - Software Sector Analyst',
  link: 'https://www.trinitysmf.com/',
  description: <Description
    description={'Trinity Student Managed Fund is a student run investment fund with a real-life equity portfolio of €400k+ assets under management. As a software sector analyst, I attend weekly sector meetings where I learn about stocks, business valuation, risk, and investing. In a team of 3, we analysed and pitched Crowdstrike to the investment committee.'}
    points={[]} />,
  skills: ["Investing", "Pitching Stocks", "Teamwork"]
},
{
  title: 'TES - Incubator Ambassador',
  link: 'https://testrinity.com/',
  description: <Description
    description={'Trinity Entrepreneurial Society runs programmes and events that foster innovation and aids students on all stages of their entrepreneurial journey. As an incubator ambassador, I ran the Incubator Pitch Night, compiling promising startup pitch decks and announcing speakers.'}
    points={[]} />,
  skills: ["Public Speaking"]
}]

export default experiences;