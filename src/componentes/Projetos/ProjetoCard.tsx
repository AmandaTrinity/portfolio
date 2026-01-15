import { Code, ExternalLink } from "lucide-react";
import type { Projeto } from "./projetos";
import "../../styles/project.css";

interface ProjetoCardProps {
  projeto: Projeto
}

export function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <div className="project-card">
            <div className="project-img-wrapper">
                <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="project-img"
                />
                <div className="project-img-overlay"></div>
            </div>

            <div className="project-content">
                <h3 className="project-name">{projeto.title}</h3>
                <p className="project-description">{projeto.description}</p>

                <div className="tag-container">
                    {projeto.tags.map((tag, i) => (
                    <span key={i} className="tag">
                        {tag}
                    </span>
                    ))}
                </div>

                <div className="project-links">
                    <a
                    href={projeto.repo}
                    target="_blank"
                    className="project-link"
                    >
                        <Code size={18} />
                        <span>Código</span>
                    </a>

                    {projeto.demo && (
                    <a
                        href={projeto.demo}
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
    )
}