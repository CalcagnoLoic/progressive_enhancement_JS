// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let img = document.querySelector("img");
    let kiss = img.getAttribute("data-hover");

    img.addEventListener("mouseover", () => {
        img.src = kiss;
    })

})();
