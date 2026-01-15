import ReactLogo from "../../assets/logos/react.png"
import AngularLogo from "../../assets/logos/angular.png"
import PythonLogo from "../../assets/logos/python.png"
import JSLogo from "../../assets/logos/javascript.png"
import TSLogo from "../../assets/logos/typescript.png"
import HTMLLogo from "../../assets/logos/html.png"

export interface Habilidade {
  nome: string
  logo: string
}

export const habilidades: Habilidade[] = [
  { nome: "React", logo: ReactLogo },
  { nome: "Angular", logo: AngularLogo },
  { nome: "Python", logo: PythonLogo },
  { nome: "JavaScript", logo: JSLogo },
  { nome: "TypeScript", logo: TSLogo },
  { nome: "CSS/HTML", logo: HTMLLogo },
]