// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal{
        constructor(name){
            super(),
            this.name = name
        }
    }

    class Dog extends Animal{
        constructor(name){
            super(),
            this.name = name
        }
    }
    
    document.getElementById("run").addEventListener("click", () => {
        let hey = new Cat("test")
        console.log(hey.sayHello)
    })
})();
