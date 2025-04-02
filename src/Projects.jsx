const projects = [
    { name: "Página Web WTICS", repo: "https://github.com/Nannys-cmd/wtics", demo: "https://nannys-cmd.github.io/wtics/" },
    { name: "Proyecto 2", repo: "https://github.com/Nannys-cmd/proyecto2", demo: "https://demo2.com" },
    { name: "Proyecto 3", repo: "https://github.com/Nannys-cmd/proyecto3", demo: "https://demo3.com" },
  ];
  
  function Projects() {
    return (
      <section>
        <h2>Mis Proyectos</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong> 
              <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio de ${project.name}`}>
                📂 Repo
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.name}`}>
                  🌍 Demo
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Projects;
  
  