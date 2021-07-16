/*Functions*/

/*1*/
/**
 * Function get output some text
 * @param {String} text Input anybody text
 * @returns 'Вы ввели ' + input text
 */
function getSomeText (text){
    if (typeof text !== 'string')
    return 'Вы ввели неверный тип данных!';

    return 'Вы ввели ' + text;
}
console.log(getSomeText('Hello'));

/*2*/
/**
 * Function calc summ input number with five
 * @param {Number} num Input anybody number
 * @returns Summ input number with five
 */
function calcSummWithNumberFive (num){
    if (typeof num !== 'number'){
        return 'Вы ввели неверный тип данных';
    }

    if (isNaN(num)){
        return false;
    }

    return num + 5;
}
console.log(calcSummWithNumberFive(0));

/*3*/
/**
 * Function get summ two input anybody texts
 * @param {String} a Input anybody text
 * @param {String} b Input anybody text
 * @returns Summ two input texts
 */
function getSummTwoTexts (a, b){
    if (typeof a !== 'string' && typeof b !== 'string'){
        return 'Вы ввели неверный тип данных';
    }
    
    return a + ' ' + b;
}
console.log(getSummTwoTexts('Hello', 'Again'));

/*4*/
/**
 * Function of creation two anybody numbers
 * @param {Numbers} a Input anybody number
 * @param {Numbers} b Input anybody number
 * @returns Creation two input numbers
 */
function calcCreationTwoNumbers (a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Вы ввели неверный тип данных';
    }
    
    if (isNaN(a) || isNaN(b)){
        return false;
    }
    
    return a * b;
}
console.log(calcCreationTwoNumbers(6, 5));

/*5*/
/**
 * Function check remainder of the division
 * @param {Number} a Input anybody number
 * @param {Number} b Input anybody number
 * @returns Text which informated you, have input number two division at number one
 */
function checkRemainderOfTheDivision (num1, num2){
    if ((typeof num1 !== 'number' && typeof num2 !== 'number') && (typeof num1 !== 'string' && typeof num2 !== 'string')){
        return 'Вы ввели неверный тип данных';
    }
    
    if (isNaN(num1) || isNaN(num2)){
        return false;
    }
    
    if (num1 % num2 === 0){
        return true;
    }return false;
}
console.log(checkRemainderOfTheDivision('25', '5'));

/*6*/
/**
 * Function calc number in pow
 * @param {Number} a Input anybody number
 * @param {Number} b Input anybody number for pow
 * @returns Result of calc number in pow
 */
function calcNumberInPow (a, b){
    if ((typeof a !== 'number' && typeof b !== 'number') && (typeof a !== 'string' && typeof b !== 'string')){
        return 'Вы ввели неверный тип данных';
    }
    
    if (isNaN(a) || isNaN(b)){
        return false;
    }

    return Math.pow(a, b)
}
console.log(calcNumberInPow(2, 2));

/*7*/
 function calcAreaTrapezoid (a, b, h){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number'){
        return 'Вы ввели неверный тип данных';
    }
    
    if (isNaN(a) || isNaN(b) || isNaN(h)){
        return false;
    }

    return ((a + b) / 2) * h;
}
console.log(calcAreaTrapezoid(2, 4, 2));

/*8*/
function calcTwoNumbers (a, b, c){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'string'){
        return 'Вы ввели неверный тип данных';
    }

    if (isNaN(a) || isNaN(b)){
        return false;
    }

    switch (c){
        case '+': {
            return a + b;
        }
        case '-': {
            return a - b;
        }
        case '*': {
            return a * b;
        }
        case '/': {
            return a / b;
        }
    }
}
console.log(calcTwoNumbers(3, 4, '-'));

/*Cicles*/

/*1*/
function getTextFiveStep (text){
    for (let i = 0; i < 10; i++){
        console.log(text); 
    };
}
const res = getTextFiveStep('Hello loop')

