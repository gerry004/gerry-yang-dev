import projects from "../content/projects";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-5 bg-primary">
      <h1 className="text-white py-4">Projects</h1>
      <div>
        {projects.map((project) => (
          <div className="bg-white p-6 my-6 rounded-md shadow-md shadow-gray border border-gray" key={projects.indexOf(project)}>
            <h2>{project.title}</h2>
            <p className="my-2">{project.description}</p>
            <p>Tech:</p>
            <div className="flex flex-wrap">
              {project.tools.map((tool) => (
                <p className="border-solid border-secondary border-2 rounded-md mt-2 mr-2 p-2"key={project.tools.indexOf(tool)}>{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;