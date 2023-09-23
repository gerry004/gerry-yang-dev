import experiences from "../content/experiences";

function ExperienceImage({ image, title, ...props }) {
  if (image) {
    return (<img src={image} alt={title} className="border-2 border-white w-[100%] rounded-md" />)
  }
}

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-5">
      <h1 className="py-4">Experience</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between lg:max-w-[70%] md:max-w-[80%]">
        {experiences.map((experience) => (
          <div className="bg-primary p-6 my-4 rounded-md shadow-md shadow-gray border border-gray md:my-2" key={experiences.indexOf(experience)}>
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              <ExperienceImage image={experience.image} title={experience.title} />
              <h2 className="text-white my-4">{experience.title}</h2>
              {experience.description}
              <div className="flex flex-wrap">
                {experience.skills.map((skill) => (
                  <p className="bg-white text-secondary border-solid border-white border-2 rounded-md mt-2 mr-2 p-2" key={experience.skills.indexOf(skill)}>{skill}</p>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;