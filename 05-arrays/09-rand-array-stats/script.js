// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById("run").addEventListener("click", function(){
        let arr = [];
        for (let x = 1; x < 11; x++) {
            arr.push(Math.floor(Math.random(x)*100));
        }
        arr_min = (x) => {
            //let min = document.getElementById("min");
            min = Math.min(...x);
            return min;
        }
        arr_max = (x) => {
            //let min = document.getElementById("min");
            max = Math.max(...x);
            return max;
        }
        arr_sum = (x) => {
            //let min = document.getElementById("min");
            let sum = 0;
            for (let item of x) {
                sum += item;
                return sum;
            }
        }
        arr_avg = (x) => {
            //let min = document.getElementById("min");
            let x_l = x.length;
            avg = arr_sum(x)/x_l;
            return avg;
        }
        console.log(arr)
        console.log(arr_min(arr))
        console.log(arr_max(arr))
        console.log(arr_sum(arr))//problème ici
        console.log(arr_avg(arr))
    })
})();
