// beginning
function Animal() {
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
        if (this.satiety > 100) {
            this.satiety = 100;
            console.log('I am not hungry. We went better lying down!');
        }
        if (this.satiety < 0) {
            this.satiety = 0;
            console.log('I am hungry!!!!!!!!!');
        }

        return this.satiety;
    }

    this.walk = function () {
        this.heppines += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);
        this.cheerfulness -= Math.floor(Math.random() * 10);

        if (this.heppines > 100) {
            this.heppines = 100;
            console.log('I want to go home!');
        }
        if (this.heppines < 0) {
            this.heppines = 0;
            console.log('Sad at home, went for a walk.');
        }
        return this.heppines;
    },

        this.sleep = function () {
            console.log('Zzzzzzzzz');
            this.cheerfulness += Math.floor(Math.random() * 10);
            this.heppines -= Math.floor(Math.random() * 10);
            this.satiety -= Math.floor(Math.random() * 10);

            if (this.cheerfulness > 100) {
                this.cheerfulness = 100;
                console.log('I\'m full of strength. Let\'s have fun');
            }
            if (this.cheerfulness < 0) {
                this.cheerfulness = 0;
                console.log('I want to go to bed!');
            }
            return this.cheerfulness;
        }

    this.cleanliness = function () {
        this.cleanness += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);

        if (this.cleanness > 100) {
            this.cleanness = 100;
            console.log('I do not want to swim. ((');
        }
        if (this.cleanness < 0) {
            this.cleanness = 0;
            console.log('I\'m dirty. Maybe we\'ll fix it?');
        }
        return this.cleanness;
    };

    this.goToTheGym = function () {
        this.cleanness -= Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);
        this.cheerfulness -= Math.floor(Math.random() * 10);
        this.knowledge -= Math.floor(Math.random() * 10);
        this.muscle += Math.floor(Math.random() * 10);

        if (this.muscle > 100) {
            this.muscle = 100;
            console.log('I\'m already very strong, there is no sense to go to the gym');
        }
        if (this.muscle < 0) {
            this.muscle = 0;
            console.log('GO TO GYM,');
        }

        return this.muscle;
    };


    this.readBooks = function () {
        this.knowledge += Math.floor(Math.random() * 10);
        this.satiety -= Math.floor(Math.random() * 10);

        if (this.muscle < 0) {
            this.muscle = 0;
            console.log('We should have already read something.');
        }
        return this.knowledge;
    };

    this.free = function () {
        return console.log('Dobby is free!!!!!');
    }
    this.help = function () {
        var help_string = "Let me help you. \n " +
            "If I am hungry, then use the command myanimal.eat() \n " +
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


var myanimal = new Animal();
console.log('Hello!!! I am Tamaguchi')

