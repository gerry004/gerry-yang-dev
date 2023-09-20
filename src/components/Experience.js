import experiences from "../content/experiences";

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-5">
      <h1 className="py-4">Experiences</h1>
      <div>
        {experiences.map((experience) => (
          <div className="bg-primary p-6 my-4 rounded-md shadow-md shadow-gray border border-gray" key={experiences.indexOf(experience)}>
            <h2 className="text-white">{experience.title}</h2>
            <p className="text-white my-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;