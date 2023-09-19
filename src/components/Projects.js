import projects from "../content/projects";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-2">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={projects.indexOf(project)}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.tools.map((tool) => (
            <p key={project.tools.indexOf(tool)}>{tool}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Projects;