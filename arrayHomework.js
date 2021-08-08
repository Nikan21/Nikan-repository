/* 1. Создать пустой массив, ноль ячеек, добавить в него цифры от 1 до 10 */

const array = [];
for(let i = 1; i <= 10; i++){
    array.push(i);
}
console.log(array);

/* 2. Добавить в начало массива 0  */

array.unshift(0);
console.log(array);

/* 3. Удалить 1 элемент с конца массива, и 1 элемент с начала */

array.shift(1);
array.pop(1);
console.log(array);

/* 4. Удалить 1 элемент где нибудь в середине */

array.splice(4, 1);
console.log(array);

/* 5. Добавить на его место в середине цифру 5 */

array.splice(4, 0, 5);
console.log(array);

/* 6. Копировать или клонировать весь массив */

const array2 = array.slice(0);
console.log(array2);

/* 7. У новой копии массива удалить половину элементов */

array2.splice(4);
console.log(array2);

/* 8. Создать пустой массив, 8 ячеек */

const array3 = Array(8);
console.log(array3);

/* 9. Заполнить массив с начала до половины нулями */

array3.fill(0, 0, 4);
console.log(array3);

/* 10. Отфильтровать пустые ячейки */

const array4 = array3.filter((value) => {
    return value = 'undefined';
})
console.log(array4);

/* 11. Создать массив, 10 ячеек, числа от 1 до 10. */

const array5 = [];
for(let i = 1; i <= 10; i++){
    array5.push(i);
}
console.log(array5);

/* На основе него создать массив квадратов значений */

const array6 = array5.map((value) =>{
    /* return Math.pow(value); */  
    return value * value;
})
console.log(array6);

/* 12. Перевести массив в строку, с разделителем "&&" */

/* array6.join('&&');
console.log(array6); */

const array7 = ['Apple', 'Banana', 'Kiwi', 'Strawbery', 'Cherry'];
console.log(array7.join('&&'));

/* 13. Создать массив продуктов, 3-5 элементов. 
Каждый продукт имеет свойства - наименование, цена, осталось ли на складе, колво на складе. */

const Product = function (productName, productPrice, quantityInStock){
    this.productName = productName;
    this.productPrice = productPrice;
    this.statusInStock = function () {
        return this.quantityInStock >= 1
    };
    this.quantityInStock = quantityInStock;
};

const fruitApple = new Product('Apple', 100, 0);
const fruitBanana = new Product('Banana', 50, 3);
const Milk = new Product('Milk', 22, 0);
const Chicken = new Product('Chiken', 500, 132);
const Egg = new Product('Eggs', 5, 600);
 
const arrayProducts = [fruitApple, fruitBanana, Milk, Chicken, Egg];
console.log(arrayProducts);

/* 14. Отфильтровать массив продуктов по тому есть ли они на складе. 
Потом по количеству на складе больше 5 шт. (filter().filter()) */

const arrayAvailable = arrayProducts.filter((object) =>{
    return object.quantityInStock >=1;
});

console.log(arrayAvailable);

const arrayAvailableMoreFive = arrayProducts.filter((object) =>{
    return object.quantityInStock >=5;
});

console.log(arrayAvailableMoreFive);

/* 15. Создать массив Корзина.
Спрашивать у пользователя ид (индекс продукта) через prompt который он хочет положить в корзину.
_Клонировать_ в корзину обьект продукта по индексу выбранному пользователем. */


/* const index = Number(prompt('Введите id продукта ,который хотите отложить.'));
const basket = arrayProducts.slice(Number(index), Number(index+1));

console.log(basket); */

/* 16. Создать _шаблон_ обьекта Пользователь. Принимать параметры - username, age, isMale, password. */

const User = function(username, age, isMale, password){
    this.username = username;
    this.age = age;
    this.isMale = isMale;
    this.password = password;
};

/* 17. В цикле (for или map) создать 5 пользователей (new User) и поместить их в массив users. 
Имена, возрасты, пол, и пароль пусть зависят от индекса ("username1", "username2" ...). */

const users = [];

for (let i = 1; i <= 5; i++) {
    users.push (new User('username'+i, 21+i, (i % 2 === 0? true: false), 1234 + i));
}

console.log(users);