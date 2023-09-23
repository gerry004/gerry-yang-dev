import projects from "../content/projects";

function ProjectImage({ image, title, ...props }) {
  if (image) {
    return (<img src={image} alt={title} className="border-2 border-gray rounded-md" />)
  }
}

function Projects() {

  return (
    <div className="flex flex-col justify-center items-center py-8 px-5 bg-primary">
      <h1 className="text-white py-4">Projects</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between md:max-w-[80%] lg:max-w-[70%]">
        {projects.map((project) => (
          <div className="bg-white p-6 my-6 rounded-md shadow-md shadow-gray border border-gray md:my-2" key={projects.indexOf(project)}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">

              <ProjectImage image={project.image} title={project.title} />
              <h2 className="my-4">{project.title}</h2>
              {project.description}
              <div className="flex flex-wrap">
                {project.tools.map((tool) => (
                  <p className="border-solid border-secondary text-secondary border-2 rounded-md mt-2 mr-2 p-2" key={project.tools.indexOf(tool)}>{tool}</p>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;