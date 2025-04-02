import "./App.css";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header>
        <h1>👩‍💻 Daniela | Desarrollador Web</h1>
        <h2>🚀 Java | React | Bases de Datos | IA</h2>
      </header>
      
      <main>
        <Projects />
      </main>
      
      <footer>
        <p>
          📩 Contacto: 
          <a href="bastiasdany.84@gmail.com" target="_blank" rel="noopener noreferrer">
            Daniela Bastias
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
