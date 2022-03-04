// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {
    //récupération de l'attribut
    let src = document.getElementById("source").getAttribute("data-image");

    //ajout de l'attribut
    let attr = document.createAttribute("newImg");
    attr.value = src;
    //node.setAttributeNode(attr)
    //node.getAttribute(src)

    //let newImg = document.getElementById("target") //setAttributeNode(attr);

    //suppression de l'attribut
    document.getElementById("source").removeAttribute("data-image");



    //console.log(src)
    console.log(attr)
    //console.log(newImg)
})();
