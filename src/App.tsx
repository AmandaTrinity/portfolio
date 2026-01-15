import Header from "./componentes/Header/header"
import Sobre from "./componentes/Sobre/sobre"
import Formacao from "./componentes/Formacao/formacao"
import { Projects  } from "./componentes/Projetos/Projetos"
import Contato from "./componentes/Contato/contato"

const App = () => {
  return (
    <>
      <Header />
      <Sobre />
      <Formacao />
      <Projects />
      <Contato />
    </>

  )
}

export default App
