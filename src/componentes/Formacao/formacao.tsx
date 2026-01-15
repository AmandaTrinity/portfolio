import { MapPin, School, Building2 } from "lucide-react";
import "../../styles/formacao.css"

const Formacao = () => {
    return (
        <section id="formacao" className="formacao">
            <div className="conteudo">
                <div className="coluna-esquerda">
                    
                    <div>
                        <span className="tag-formacao">Formação</span>
                    </div>

                    <h2 className="curso">Ciência da Computação</h2>

                    <div className="linha-info">
                        <School className="icone" size={22} />
                        <span>CIn / UFPE</span>
                    </div>

                    <div className="linha-info">
                        <MapPin className="icone" size={22} />
                        <span>Recife, Pernambuco</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-item">
                        <Building2 className="icone-card" size={28} />
                        <div>
                            <h3>Centro de Informática</h3>
                            <p>
                                Um dos centros de excelência em computação mais renomados do Brasil,
                                com destaque em pesquisa e inovação tecnológica.
                            </p>
                        </div>
                    </div>

                    <div className="conteudos">
                        <p><span>•</span> Desenvolvimento de Software</p>
                        <p><span>•</span> Algoritmos e Estruturas de Dados</p>
                        <p><span>•</span> Inteligência Artificial</p>
                        <p><span>•</span> Engenharia de Software</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formacao
