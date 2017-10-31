// beginning
function myAnimal() {
    this.Name = 'Tamaguchi';
    this.heppines = Math.floor(Math.random() * 10);
    this.cheerfulness = Math.floor(Math.random() * 10);
    this.cleanness = Math.floor(Math.random() * 10);
    this.satiety = Math.floor(Math.random() * 10);
    this.muscle = Math.floor(Math.random() * 10);
    this.knowledge = Math.floor(Math.random() * 10);

    this.eat = function () {
        console.log('Am-am-am');
        this.satiety += Math.floor(Math.random() * 10);
        healthy();
        return this.satiety;
    }

    this.walk = function () {
        this.heppines += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);
        this.cheerfulness -= Math.floor(Math.random() * 10);
        healthy();

        return this.heppines;
    },

        this.sleep = function () {
            console.log('Zzzzzzzzz');
            this.cheerfulness += Math.floor(Math.random() * 10);
            this.heppines -= Math.floor(Math.random() * 10);
            this.satiety -= Math.floor(Math.random() * 10);
            healthy();

            return this.cheerfulness;
        }

    this.cleanliness = function () {
        this.cleanness += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);

        healthy();
        return this.cleanness;
    };

    this.goToTheGym = function () {
        this.cleanness -= 1000; //Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);
        this.cheerfulness -= Math.floor(Math.random() * 10);
        this.knowledge -= Math.floor(Math.random() * 10);
        this.muscle += Math.floor(Math.random() * 10);

        healthy();
        return this.muscle;
    };


    this.readBooks = function () {
        this.knowledge += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);

        this.healthy();

        return this.knowledge;
    };

    this.free = function () {
        return console.log('Dobby is free!!!!!');

    }
    this.help = function () {
        var help_string
        this.help_string = "Let me help you. \n " +
            "If I am hungry, then use the command myanimal.eat()" + "\n " +
            "If I'm sad, then use the command myanimal.walk() \n" +
            "If I'm tired, then use the command myanimal.sleep() \n" +
            "If I'm dirty, then use the command myanimal.cleanliness() \n" +
            "I love reading books and going to the gym, use these commands to do this myanimal.readBooks() and  myanimal.goToTheGym()";
        console.log(this.help_string);
    }

    this.health = function () {
        var myhealth = "I am " + this.Name + "\n" +
            "My satiety is " + this.satiety + "\n" +
            "My heppines is " + this.heppines + "\n" +
            "My cheerfulness is " + this.cheerfulness + "\n" +
            "My cleanness is " + this.cleanness + "\n" +
            "My muscle is " + this.muscle + "\n" +
            "My knowledge is " + this.knowledge + "\n";
        console.log(myhealth);
    }
}

function healthy() {
    if (myanimal.satiety > 100) {
        myanimal.satiety = 100;
        console.log('I am not hungry. We went better lying down!');
    }
    if (myanimal.satiety < 0) {
        myanimal.satiety = 0;
        console.log('I am hungry!!!!!!!!!' + "You're a bad friend. I'm leaving you");

        myanimal = undefined;

    }
    if (myanimal.muscle < 0) {
        myanimal.muscle = 0;
        console.log('We should have already read something.' + "You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }
    if (myanimal.cleanness > 100) {
        myanimal.cleanness = 100;
        console.log('I do not want to swim. ((');
    }
    if (myanimal.cleanness < 0) {
        myanimal.cleanness = 0;
        console.log('I\'m dirty. Maybe we\'ll fix it?' + "You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }
    if (myanimal.cheerfulness > 100) {
        myanimal.cheerfulness = 100;
        console.log('I\'m full of strength. Let\'s have fun');
    }
    if (myanimal.cheerfulness < 0) {
        myanimal.cheerfulness = 0;
        console.log('I want to go to bed!' + "You're a bad friend. I'm leaving you" + "You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }
    if (myanimal.muscle > 100) {
        myanimal.muscle = 100;
        console.log('I\'m already very strong, there is no sense to go to the gym');

    }
    if (myanimal.muscle < 0) {
        myanimal.muscle = 0;
        console.log('GO TO GYM,' + "You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }

    if (myanimal.heppines > 100) {
        myanimal.heppines = 100;
        console.log('I want to go home!');
    }
    if (myanimal.heppines < 0) {
        myanimal.heppines = 0;
        console.log('Sad at home, went for a walk.' + "You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }
    if (myanimal.knowledge > 100) {
        myanimal.knowledge = 100;
        console.log('I want to read!');
    }
    if (myanimal.knowledge < 0) {
        myanimal.knowledge = 0;
        console.log("You're a bad friend. I'm leaving you");
        myanimal = undefined;
    }
}

var myanimal = new myAnimal();
console.log('Hello!!! I am Tamaguchi');
