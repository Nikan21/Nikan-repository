/* const array = [12, 10, 5, 23, 0, 123];

const array2 = array.filter(function (value){
    return value % 2 !== 0;
});
console.log(array2);
 */


/* const array = ['Иван', 'Катя', 'Сергей', 'Ирис'];

const array2 = array.filter(function(value){
    return value[0] === 'И';
});
console.log(array2) */

/* const mobiles = [{price:100}, {price:120}, {price:50}];

const reduseSumm = mobiles.reduce ((accum, value) => {
    return accum + value.price;
});
console.log(reduseSumm) */

/* const elem = document.getElementById('First');
console.log(elem); */

const elems = document.getElementsByClassName("test");
const array = Array.from(elems);

console.log(array[1]);
console.log(array.join('\n'));