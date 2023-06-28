interface ICurriculum {
  dateI: string,
  dateF: string,
  institution?: string,
  course?: string,
  company?: string,
  office?: string,
  desc?: string,
}


export const curriculum : Array<ICurriculum> =
  [
    {
      dateI: "2017-02-01 00:00:00",
      dateF: "2018-07-01 00:00:00",
      institution: "Faculdade Estácio de Sá",
      course: "Analise e Desenvolvimento de Sistemas"

    },
    {
      dateI: "2008-03-01 00:00:00",
      dateF: "2012-12-01 00:00:00",
      institution: "UFSC",
      course: "Design Gráfico"
    },
    {
      dateI: "2007-07-01 00:00:00",
      dateF: "2009-12-01 00:00:00",
      institution: "IFSC",
      course: "Técnico em Informática"
    },
    
    {
      dateI: "2012-01-01 00:00:00",
      dateF: "2015-01-01 00:00:00",
      company: "Editora Ponto Ltda",
      office: "Designer Gráfico",
      desc: "Diagramação de produtos impressos e digitais,  fechamento de arquivo e tratamento de imagens."
    },
    {
      dateI: "2018-06-01 00:00:00",
      dateF: "2021-09-01 00:00:00",
      company: "Machado’s Company (Autônoma)",
      office: "Designer Gráfico",
      desc: "Criação, impressão e estampas em materiais sublimáticos."
    },
    {
      dateI: "2017-09-01 00:00:00",
      dateF: "2018-05-01 00:00:00",
      company: "IBGE-Instituto Brasileiro de Geografia e Estatística",
      office: "Agente Censitário de Informática",
      desc: "Auxiliar os recensiadores, preparar os equipamentos de coleta e apoio ao setor de informática"
    },
    {
      dateI: "2021-12-01 00:00:00",
      dateF: "2023-04-01 00:00:00",
      company: "Suzano",
      office: "Desenvolvedora Júnior",
      desc: "Desenvolvimento de Landpage, sistema back-end e front-end. Tive experiência com as seguintes tecnologias: NodeJs, Typescript, ReactJs, Javascript, html, css e Bootstrap."
    }
  ]

