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
      dateI: "2021-03-01 00:00:00",
      dateF: "2022-06-01 00:00:00",
      institution: "UFSC",
      course: "Design"

    },
    {
      dateI: "2014-12-01 00:00:00",
      dateF: "2015-06-01 00:00:00",
      institution: "IFSC",
      course: "Design"
    },
    {
      dateI: "2005-04-01 00:00:00",
      dateF: "2006-07-01 00:00:00",
      institution: "outro",
      course: "Design"
    },
    {
      dateI: "2002-03-01 00:00:00",
      dateF: "2004-06-01 00:00:00",
      company: "IBGE",
      office: "Recensitário de Informática",
      desc: "Auxiliar os recensiadores, preparar os equipamentos de coleta, apoio ao setor de informática"
    },
    {
      dateI: "2017-03-01 00:00:00",
      dateF: "2009-06-01 00:00:00",
      company: "Editora Ponto",
      office: "Recensitário de Informática",
      desc: "Auxiliar os recensiadores, preparar os equipamentos de coleta, apoio ao setor de informática"
    },
    {
      dateI: "2022-12-01 00:00:00",
      dateF: "2023-04-01 00:00:00",
      company: "Suzano",
      office: "Recensitário de Informática",
      desc: "Auxiliar os recensiadores, preparar os equipamentos de coleta, apoio ao setor de informática"
    }
  ]

