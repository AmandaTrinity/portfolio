import { Github, ExternalLink } from "lucide-react";
import JornadaCarnaval from "../assets/jornada_carnaval.jpeg"
import "../styles/project.css";

const projects = [
  {
    title: "Jornada para o Carnaval",
    description:
      "Jogo desenvolvido em Python com Pygame, baseado nas tradições de Olinda. O Professor Stefan precisa recuperar três itens sagrados enquanto enfrenta La Ursas e vence desafios em fases progressivas.",
    image: JornadaCarnaval,
    tags: ["Python", "Pygame", "Game Dev"],
    repo: "https://github.com/AmandaTrinity/ProjetoIP",
    demo: null,
  },
  {
    title: "PersonalIA",
    description:
      "Aplicação full-stack com IA generativa para criar treinos personalizados sem equipamentos. Backend em FastAPI com integração Gemini e frontend em React.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1080",
    tags: ["FastAPI", "React", "MongoDB", "IA"],
    repo: "https://github.com/AmandaTrinity/personalIA",
    demo: null,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-img-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-container">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="project-link"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="project-link"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
