import "./Projects.css"; // Asegúrate de que la ruta sea correcta

const projects = [
    { name: "WTICS", repo: "https://github.com/Nannys-cmd/wtics", demo: "https://nannys-cmd.github.io/landing-portfolio-template/" },
    { name: "Pádel APDA", repo: "https://github.com/Priscilla-Rojas/Proyecto-CAC", demo: "https://priscilla-rojas.github.io/Proyecto-CAC/" },
    { name: "CSS-Rebels", repo: "https://github.com/Daro2080/CSS-Rebels", demo: "https://daro2080.github.io/CSS-Rebels/" },
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
  
  