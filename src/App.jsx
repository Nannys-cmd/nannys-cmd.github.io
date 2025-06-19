import "./App.css";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header>
        <h1>👩‍💻 Daniela | Desarrollador Web</h1>
        <h2>🚀 Java | React | Bases de Datos | IA</h2>
      </header>
      
      <main>
        <Projects />
        <About />
      </main>
      
<footer>
  <p>📫 Contacto:</p>
  <div className="social-links">
    <a href="mailto:bastiasdany.84@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> |
    <a href="https://www.linkedin.com/in/danielaesterbastias" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
    <a href="https://github.com/Nannys-cmd" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
  <p className="copy">© 2025 Daniela Bastias</p>
</footer>

    </div>
  );
}

export default App;
