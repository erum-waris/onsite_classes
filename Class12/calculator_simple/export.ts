//for addition rest parameters use reduce method to get single value

export default function addition(...numbers:number[]):number{

    //result value is previous value
    //current value is which is going to add
return numbers.reduce((result,current) => result + current )


}

export function multiplication( N1:number, N2:number):number{
    return  N1 * N2
}

export function subtraction(N1:number, N2:number){
    return N1 - N2
}

export function division(N1:number, N2:number){
    return N1 / N2
}