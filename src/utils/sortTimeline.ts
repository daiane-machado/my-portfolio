import { curriculum } from "./datasCurriculum"

export function sortTimeLine(){
  const datas : any = curriculum
 

  datas.sort(function (a: { data: any | number }, b: { data: any | number }) {
    const timeA = new Date(a.data.dateI)
    const timeB = new Date(b.data.dateI)
    return timeB.getTime() - timeA.getTime();
  })


}