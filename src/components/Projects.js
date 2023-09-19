import projects from "../content/projects";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-5">
      <h1 className="mt-4">Projects</h1>
      <div>
        {projects.map((project) => (
          <div className="my-4" key={projects.indexOf(project)}>
            <h2>{project.title}</h2>
            <p className="my-2">{project.description}</p>
            <p>Tech:</p>
            <div className="flex flex-wrap">
              {project.tools.map((tool) => (
                <p className="border-solid border-black border rounded-md mt-2 mr-2 p-2"key={project.tools.indexOf(tool)}>{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;