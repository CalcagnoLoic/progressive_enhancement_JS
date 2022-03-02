// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById("run").addEventListener("click", () => {
        let map_key = new Map([keys]);
        let map_value = new Map([values])

        console.log(map_key);
        console.log(map_value);

        //let object = Object.fromEntries(map);
        console.log(object)
    })
})();
