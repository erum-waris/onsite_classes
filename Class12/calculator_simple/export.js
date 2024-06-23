//for addition rest parameters use reduce method to get single value
export default function addition(...numbers) {
    //result value is previous value
    //current value is which is going to add
    return numbers.reduce((result, current) => result + current);
}
export function multiplication(N1, N2) {
    return N1 * N2;
}
export function subtraction(N1, N2) {
    return N1 - N2;
}
export function division(N1, N2) {
    return N1 / N2;
}
