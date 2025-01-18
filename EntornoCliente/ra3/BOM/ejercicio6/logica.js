function cambiarEstilo(){
    let stylesheet = document.styleSheets[0];

    let rules = stylesheet.cssRules;

    rules[0].style.color = "blue";
}