// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname,
            this.lastname = lastname
        }
        get name(){
            return `${this.firstname} ${this.lastname}`;
        }
        set name(id) {
            return this.split(id);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let ind = new Person("Loïc", "Calcagno");
        console.log(ind.name)
    })
})();
