import type { Habilidade } from "./habilidades"
import "../../styles/habilidade.css"

interface HabilidadeTagProps {
    habilidade: Habilidade
}

export function HabilidadeTag({ habilidade }: HabilidadeTagProps) {
    return(
        <div className="habilidade-tag">
            <img
                src={habilidade.logo}
                alt={habilidade.nome}
                className="habilidade-icone"
            />
            <span className="habilidade-nome">{habilidade.nome}</span>
        </div>
    )
}