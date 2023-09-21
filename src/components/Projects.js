import projects from "../content/projects";

function Projects() {
  const readMore = (id) => {
    const project = document.getElementById("project-" + id);
    const button = document.getElementById("p-button-" + id);
    if (project.classList.contains("line-clamp-4")) {
      project.classList.remove("line-clamp-4");
      button.textContent = "...Read Less";
    }
    else {
      project.classList.add("line-clamp-4");
      button.textContent = "Read More...";
    }
  }

  return (
    <div className="flex flex-col justify-center items-center py-8 px-5 bg-primary">
      <h1 className="text-white py-4">Projects</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between md:max-w-[60%]">
        {projects.map((project) => (
          <div className="bg-white p-6 my-6 rounded-md shadow-md shadow-gray border border-gray md:my-2" key={projects.indexOf(project)}>
            <h2>{project.title}</h2>
            <p id={"project-" + projects.indexOf(project)} className="line-clamp-4 my-2">{project.description}</p>
            <button className="text-secondary" id={"p-button-" + projects.indexOf(project)} onClick={() => readMore(projects.indexOf(project))}>Read More...</button>
            <div className="flex flex-wrap">
              {project.tools.map((tool) => (
                <p className="border-solid border-secondary text-secondary border-2 rounded-md mt-2 mr-2 p-2"key={project.tools.indexOf(tool)}>{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;