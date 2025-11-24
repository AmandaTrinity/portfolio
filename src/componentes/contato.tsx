import { Mail, Linkedin, Github } from "lucide-react";
import "../styles/contato.css";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h1 className="titulo">Vamos Conversar?</h1>
      <div className="conteudo-contato">
        <p className="subtitulo">
          Estou sempre aberto a novos projetos e oportunidades. Entre em contato
          comigo através das redes sociais ou envie um e-mail!
        </p>
      </div>

      <div className="icones">
        <a href="mailto:amanda.trinitygomes@gmail.com" className="icon-wrapper email">
          <Mail size={26} />
        </a>

        <a href="www.linkedin.com/in/amanda-trinity-6b377123b" target="_blank" className="icon-wrapper">
          <Linkedin size={26} />
        </a>

        <a href="https://github.com/AmandaTrinity" target="_blank" className="icon-wrapper">
          <Github size={26} />
        </a>
      </div>

      <p className="direitos">© 2025 - Amanda Trinity.</p>
    </section>
  );
};

export default Contato;
