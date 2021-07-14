/*1*/
const y = 5;
const u = 10;

const Max_Number = function(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(Max_Number(y, u));

/*2*/
const q = 5;
const w = 10;

const Min_Number = function(num1, num2){
    if(num1 < num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(Min_Number(q, w));

/*3*/
const r = 5;

const Even_or_Odd = function(num1){
    if(num1 % 2 === 0){
        return 'Чётное';
    }else{
        return 'Не чётное';
    }
}
console.log(Even_or_Odd(r));

/*4*/
const a = 1;
const b = 5;
const c = 3;

const Quadratic_equation = function(num1, num2, num3){
    const Discriminant = Math.pow(num2, 2) - 4 * num1 * num3;
    if(Discriminant < 0){
        return 'Корней нет';
    }else if(Discriminant === 0){
        return -num2/(2*num1);
    }else{
        const x1 = (-num2 - Math.sqrt(Discriminant))/2*num1;
        const x2 = (-num2 + Math.sqrt(Discriminant))/2*num1;
        return [x1, x2];
    }
}
console.log(Quadratic_equation(a, b, c));
