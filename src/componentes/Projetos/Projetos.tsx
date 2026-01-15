import { projeto } from "./projetos"
import { ProjetoCard } from "./ProjetoCard"
import "../../styles/project.css"

export function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projetos</h2>

        <div className="projects-grid">
          {projeto.map((projeto, index) => (
            <ProjetoCard key={index} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
