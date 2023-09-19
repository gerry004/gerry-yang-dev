import experiences from "../content/experiences";

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-5">
      <h1 className="mt-4">Experiences</h1>
      <div>
        {experiences.map((experience) => (
          <div className="my-4" key={experiences.indexOf(experience)}>
            <h2>{experience.title}</h2>
            <p className="my-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;