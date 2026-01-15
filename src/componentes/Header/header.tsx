import PhotoMy from "../../assets/my.jpeg"
import "../../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="imagem" src={PhotoMy} alt="Foto pessoal" />
            </div>
            <div className="texto">
                <div className="nome">
                    <h1>DESENVOLVEDORA FRONT-END</h1>
                </div>
                <div className="frase">
                    <h2>Técninca em Desenvolvimento de Sistemas e Graduanda em Ciência da Computação no CIn/UFPE</h2>
                </div>
                <div className="botoes">
                    <a href="#sobre" className="botao">Sobre Mim</a>
                    <a href="#projetos" className="botao">Projetos</a>
                    <a href="#contato" className="botao">Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Header