import "../../styles/sobre.css"
import { habilidades } from "./habilidades"
import { HabilidadeTag } from "./HabilidadeTag"

const Sobre = () => {
    return (
        <div className="sobre">
            <h2 className="sobre-titulo">SOBRE MIM</h2>
            <div className="texto">
                <p>Sou uma profissional apaixonado por tecnologia e inovação, sempre buscando criar soluções que fazem a diferença no mundo digital.</p>
                <p>Com experiência em desenvolvimento web e design, combino criatividade com técnica para transformar ideias em realidade. Acredito que cada projeto é uma oportunidade de aprender e evoluir.</p>
                <p>Quando não estou codificando, gosto de explorar novas tecnologias, contribuir com a comunidade e me inspirar em diferentes áreas do conhecimento.</p>
            </div>
            <div className="habilidade-section">
                <h3 className="habilidade-titulo">Habilidades</h3>
                <div className="habilidade-container">
                    {habilidades.map((hab) => (
                        <HabilidadeTag key={hab.nome} habilidade={hab} />
                    ))}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Sobre