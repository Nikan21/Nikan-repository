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
    status_sleep: true,
/*     status_sleep (wake_or_sleep_girafe){
        if (wake_or_sleep_girafe === true){
            return 'Не спит';
        }else{
            return 'Спит';
        }
    }, */
    height_body: 30,
    height_neck: 70,
    full_height (){
        return this.height_body + this.height_neck;
    },
    wake_or_sleep_girafe (a){
        if (a === true){
            this.status_sleep = true;
        }else{
            this.status_sleep = false;
        }
    }    
}
Girafe.wake_or_sleep_girafe(false)
console.log(Girafe);
console.log(Girafe.full_height());
