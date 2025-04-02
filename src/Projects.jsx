const projects = [
    { name: "Proyecto 1", repo: "https://github.com/Nannys-cmd/proyecto1", demo: "https://demo1.com" },
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
              <a href={project.repo} target="_blank" rel="noopener noreferrer">{project.name}</a> 
              {project.demo && <span> | <a href={project.demo} target="_blank">Demo</a></span>}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Projects;
  