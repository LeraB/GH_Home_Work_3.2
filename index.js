// beginning



function myAnimal() {

    var animal = {
        Name: 'Tamaguchi',
        heppines: Math.floor(Math.random() * 10),
        cheerfulness: Math.floor(Math.random() * 10),
        cleanness: Math.floor(Math.random() * 10),
        satiety: Math.floor(Math.random() * 10),
        muscle: Math.floor(Math.random() * 10),
        knowledge: Math.floor(Math.random() * 10)

    };

    this.eat = function () {
        console.log('Am-am-am');
        animal.satiety += Math.floor(Math.random() * 10);
        this.healthy();
        return animal.satiety;
    };

    this.walk = function () {
        animal.heppines += Math.floor(Math.random() * 10);
        animal.satiety -= Math.floor(Math.random() * 10);
        animal.cheerfulness -= Math.floor(Math.random() * 10);
        this.healthy();

        return animal.heppines;
    };

        this.sleep = function () {
            console.log('Zzzzzzzzz');
            animal.cheerfulness += Math.floor(Math.random() * 10);
            animal.heppines -= Math.floor(Math.random() * 10);
            animal.satiety -= Math.floor(Math.random() * 10);
            this.healthy();
            return this.cheerfulness;
        };

    this.cleanliness = function () {
        animal.cleanness += Math.floor(Math.random() * 10);
        animal.satiety -= Math.floor(Math.random() * 10);

        this.healthy();

        return this.cleanness;
    };

    this.goToTheGym = function () {
        animal.cleanness -= 1000; //Math.floor(Math.random() * 10);
        animal.satiety -= Math.floor(Math.random() * 10);
        animal.cheerfulness -= Math.floor(Math.random() * 10);
        animal.knowledge -= Math.floor(Math.random() * 10);
        animal.muscle += Math.floor(Math.random() * 10);

        this.healthy();

        return animal.muscle;
    };


    this.readBooks = function () {
        animal.knowledge += Math.floor(Math.random() * 10);
        animal.satiety -= Math.floor(Math.random() * 10);

        this.healthy();

        return animal.knowledge;
    };


    this.help = function () {
        var help_string;
        this.help_string = "Let me help you. \n " +
            "If I am hungry, then use the command myanimal.eat()" + "\n " +
            "If I'm sad, then use the command myanimal.walk() \n" +
            "If I'm tired, then use the command myanimal.sleep() \n" +
            "If I'm dirty, then use the command myanimal.cleanliness() \n" +
            "I love reading books and going to the gym, use these commands to do this myanimal.readBooks() and  myanimal.goToTheGym()";
        console.log(this.help_string);
    };

    this.health = function () {
        var myhealth = "I am " + animal.Name + "\n" +
            "My satiety is " + animal.satiety + "\n" +
            "My heppines is " + animal.heppines + "\n" +
            "My cheerfulness is " + animal.cheerfulness + "\n" +
            "My cleanness is " + animal.cleanness + "\n" +
            "My muscle is " + animal.muscle + "\n" +
            "My knowledge is " + animal.knowledge + "\n";

        console.log(myhealth);
        this.healthy();
    };


    this.healthy = function () {

        if (animal.satiety > 100) {
            animal.satiety = 100;
            console.log('I am not hungry. We went better lying down!');

        }
        if (animal.satiety < 0) {
            animal.satiety = 0;
            console.log('I am hungry!!!!!!!!!');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')


        }
        if (animal.muscle < 0) {
            animal.muscle = 0;
            console.log('We should have already read something.');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')

        }
        if (animal.cleanness > 100) {
            animal.cleanness = 100;
            console.log('I do not want to swim. ((');
        }
        if (animal.cleanness < 0) {
            animal.cleanness = 0;
            console.log('I\'m dirty. Maybe we\'ll fix it?');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')

        }
        if (animal.cheerfulness > 100) {
            animal.cheerfulness = 100;
            console.log('I\'m full of strength. Let\'s have fun');
        }
        if (animal.cheerfulness < 0) {
            animal.cheerfulness = 0;
            console.log('I want to go to bed!');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')

        }
        if (animal.muscle > 100) {
            animal.muscle = 100;
            console.log('I\'m already very strong, there is no sense to go to the gym');
        }
        if (animal.muscle < 0) {
            animal.muscle = 0;
            console.log('GO TO GYM,');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')
        }

        if (animal.heppines > 100) {
            animal.heppines = 100;
            console.log('I want to go home!');


        }
        if (animal.heppines < 0) {
            animal.heppines = 0;
            console.log('Sad at home, went for a walk.');
            console.clear();
            console.log('Please, restart app, if you want to continuou!!!')
        }

    }
}
function dead() {
    var str = "You behaved badly with me. I'm leaving you";
    throw new Error();
}

var myanimal = new myAnimal();
console.log('Hello!!! I am Tamaguchi');

