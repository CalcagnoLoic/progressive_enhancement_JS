// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting = "Hello" ;
        constructor(greeting, name) {
            super(greeting),
            this.name = name
        }
        sayHello() {
            return super.sayHello()
        }
    } 

    class Dog extends Animal{
        static greeting = "Hello" ;
        constructor(greeting, name) {
            super(greeting),
            this.name = name
        }
        sayHello() {
            return super.sayHello()
        }
    }
    
    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat("","a cat")
        console.log(cat.sayHello())

        let dog = new Dog("","a dog")
        console.log(dog.sayHello())

    })
})();
