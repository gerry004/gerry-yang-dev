import experiences from "../content/experiences";

function Experience() {
  return (
    <div className="h-screen">
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <div key={experiences.indexOf(experience)}>
          <h2>{experience.title}</h2>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Experience;