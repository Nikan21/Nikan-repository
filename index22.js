/*1*/
const country = 'Ukraine';
const str = `I live in ${country}`;
console.log(str);

/*2*/
const firstname = 'Dima';
const id = 21;
const string = `${firstname}_${id}`;
console.log(string);

/*3*/
const city1 = 'London';
const city2 = 'Minsk';
const city3 = 'NewYork';
const country1 = 'Belorussia';
const country2 = 'USA';
const country3 = 'GreatBritain';
const str1 = `${city1} is a capital of ${country3}`;
const str2 = `${city2} is a capital of ${country1}`;
const str3 = `${city3} is a capital of ${country2}`;
console.log(str1);
console.log(str2);
console.log(str3);

/*Test 3*/
const test = ['London', 'Minsk', 'NewYork'];
const test1 = ['Belorussia', 'USA', 'GreatBritain'];
const str4 = `${test[0]} is a capital of ${test1[2]}`;
const str5 = `${test[1]} is a capital of ${test1[0]}`;
const str6 = `${test[2]} is a capital of ${test1[1]}`;
console.log([str1, str2, str3]);