let a : number = 5;
let b : string = 'a';
let c : boolean = true;
let d : any;
let e : number[] = [1, 2, 3, 4, 5];
let f : Array<number> = [1,2,3];
let g : any[] = [1, "a", true];
let k : [string, number, boolean] = ["a", 5, false]  //* buna tuple denir.

const creditPayment = 0; 
const hPayment = 1;
const eftPayment = 2;

enum Payment {credit, h, eft};

let credit = Payment.credit; // 0
let h = Payment.h; // 1
let eft = Payment.eft; // 2