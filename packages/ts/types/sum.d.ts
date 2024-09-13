/**
 * 两数之和
 * @param {number} a
 * @param {number} b
 * @description:
 * @author:XUANRUSHI
 * @date:2024-09-13
 *
 * @returns  {number}
 */
export function sum(a: number, b: number): number;


export interface ConnonResponse<T>{
    code:number
    message:string
    result:T
}

export type DayBefore =ConnonResponse<{
    latest:string[]
}>