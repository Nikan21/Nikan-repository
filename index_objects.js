/*1*/
const user = {
    firstname: 'Vasya',
    age: 32
}
console.log(user);

/*2*/
const Cat = {
    lenght_tail: 25,
    meow (){
        return 'Meow';
    }
}
console.log([Cat, Cat.meow()]);

/*3*/
const Girafe = {
    age: 12,
    weight: 80,
    statusSleep: true,
    heightBody: 30,
    heightNeck: 70,
    fullHeight (){
        return this.heightBody + this.heightNeck;
    },
    wakeOrSleepGirafe(sleerOrNot){
        this.statusSleep = sleerOrNot;
        return sleerOrNot;
    }    
}
console.log(Girafe);
console.log(Girafe.fullHeight());

/*4*/
const Motocycle = function (nameModel, tankLiters, modelEngine, numberOfSeats = 1){
    this.nameModel = nameModel;
    this.tankLiters = tankLiters;
    this.modelEngine = modelEngine;
    this.numberOfSeats = numberOfSeats;
    this.speed = 0;
    this.upSpeed = function (upSpeed){
        if (isNaN(upSpeed)){
            return 'Неверный тип данных!';
        }else{
            this.speed += upSpeed;
            return this.speed;
        }
    };
    this.downSpeed = function (downSpeed){
        if (isNaN(downSpeed)){
            return 'Неверный тип данных!';
        }
        this.speed -= downSpeed;
        if (this.speed < 0){
            this.speed = 0;
            return 'Не может быть отрицательная скорость';
        }else{
            return this.speed;
        }
    };
    this.stopSpeed = function (stop){
        if(stop === true){
            this.speed = 0;
            return this.speed;
        }
    };
}

const Kastiel = new Motocycle ('Kastiel_v.1', 65, 12345);
console.log(Kastiel)