// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname,
            this.lastname = lastname
        }
        get Name(){
            return `${this.firstname} ${this.lastname}`;
        }
        
        set Name(value) {
            this.firstname = value;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let ind = new Person("Loïc", "Calcagno");
        console.log(ind.Name)

        let ind2 = new Person("","Calcagno");
        ind2.Name = "Loïc"
        console.log(ind2.Name)
    })
})();
