// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     say=(who:string) => {
//         const firstChar=who.charAt(0).toLocaleUpperCase();
//         console.log(`(firstChar))${who.slice(1)}bless you`)
//     }
// }
// let DPZ=new Person("DPZ");
// let 主='god';
// DPZ.say(主);
// import { DayBefore } from "types/sum";
import {sum} from "./sum";
import { formatWithOptions } from "util";

class Person{
    name:string;
    constructor(name:any){
        this.name=name;
    }
    say=(who:God) => {
        // who.edit=''
        // who.gender='L'
        const firstChar=who.charAt(0).toLocaleUpperCase();
        console.log(`(firstChar))${who.slice(1)}bless you`)
    };
}
type God ='God' |'god'|'主'|'Trisolaran'
let DPZ=new Person("DPZ");
//let 主='god';
//DPZ.say('God')

// const res=sum(1,2)


export interface ConnonResponse<T>{
    code:number
    message:string
    result:T
}

export type DayBefore =ConnonResponse<{
    latest:string[]
}>

// const res:DayBefore
// res.result.latest

interface IBili{
    name?:string
    asd:any
}

const a={

} as IBili

//@ts-ignore
a.aaaa