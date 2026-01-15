import JornadaCarnaval from "../../assets/jornada_carnaval.jpeg"

export interface Projeto {
    title: string
    description: string
    image: string
    tags: string[]
    repo: string
    demo: string | null
}

export const projeto: Projeto[] = [
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
]