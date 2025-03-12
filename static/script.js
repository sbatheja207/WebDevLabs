let x = 5
let y = 7
let z = x+y
console.log(z)

let A = "Hello ";
let B = "world!";
let C = A+B
console.log(C)

function SumNPrint(x1, x2) {
    x3 = x1+x2
    console.log(x3)
}

SumNPrint(x, y)
SumNPrint(A, B)

if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
let L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(fruit) {
        if (fruit == "Banana") {
            alert ("found the Banana in first array")
        }
}

L1.forEach(findTheBanana)
L2.forEach(findTheBanana)



function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let message = ""

    if ((h > 0 && h < 5) || (h > 20 && h < 24)) {
        console.log("Good night")
        message = "Good night, my name is Sonia Batheja"
    } else if (h >= 18 && h < 20) {
        console.log("Good evening")
        message = "Good evening, my name is Sonia Batheja"
    } else if (h >= 12 && h < 18) {
        console.log("Good afternoon")
        message = "Good afternoon, my name is Sonia Batheja"
    } else {
        console.log("Good morning")
        message = "Good morning, my name is Sonia Batheja"
    }

    let greetingElem = document.getElementById("greeting");
    if (greetingElem) {
        greetingElem.innerHTML = message
    }
}

window.onload = greetingFunc();
