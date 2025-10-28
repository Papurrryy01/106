function hello() {
    console.log("hello");
    goodbye();
}

function goodbye() {
    console.log("goodbye");
}

function init() {
    console.log("welcome to 106");
    hello();
}

window.onload = init;//it wait until the html and the css finish
//to excute the logic