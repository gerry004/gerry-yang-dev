import experiences from "../content/experiences";

function Experience() {
  const readMore = (id) => {
    const experience = document.getElementById("experience-" + id);
    const button = document.getElementById("e-button-" + id);
    if (experience.classList.contains("line-clamp-3")) {
      experience.classList.remove("line-clamp-3");
      button.textContent = "...Read Less";
    }
    else {
      experience.classList.add("line-clamp-3");
      button.textContent = "Read More...";
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-8 mx-5">
      <h1 className="py-4">Experience</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between md:max-w-[60%]">
        {experiences.map((experience) => (
          <div className="bg-primary p-6 my-4 rounded-md shadow-md shadow-gray border border-gray md:my-2" key={experiences.indexOf(experience)}>
            <h2 className="text-white">{experience.title}</h2>
            <p id={"experience-" + experiences.indexOf(experience)} className="text-white my-2 line-clamp-3">{experience.description}</p>
            <button className="text-[#D3D3D3]" id={"e-button-" + experiences.indexOf(experience)} onClick={() => readMore(experiences.indexOf(experience))}>Read More...</button>
            <div className="flex flex-wrap">
              {experience.skills.map((skill) => (
                <p className="bg-white text-secondary border-solid border-white border-2 rounded-md mt-2 mr-2 p-2"key={experience.skills.indexOf(skill)}>{skill}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;