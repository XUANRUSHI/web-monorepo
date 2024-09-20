
// declare interface Aobj {
//     name:string
//     age:number
//     gender:'L'|'G'|'B'|'T'
// }

// interface Bobj extends Aobj{
//     edit: b
// }
// type b=number | string


// type ttt={joke:string} & Bobj

interface ConnonResponse<T> {
  code: number
  message: string
  result: T
}

type DayBefore = ConnonResponse<{
  latest: string[]
}>
