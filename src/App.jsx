import "./App.css";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header>
        <h1>👩‍💻 Daniela | Desarrolladora Web</h1>
        <h2>🚀 Java | React | Bases de Datos | IA</h2>
      </header>
      
      <main>
        <Projects />
      </main>
      
      <footer>
        <p>
          📩 Contacto: 
          <a href="mailto:daniela@ejemplo.com" target="_blank" rel="noopener noreferrer">
            daniela@ejemplo.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
