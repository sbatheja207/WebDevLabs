// let x = 5
// let y = 7
// let z = x+y
// console.log(z)

// let A = "Hello ";
// let B = "world!";
// let C = A+B
// console.log(C)

// function SumNPrint(x1, x2) {
//     x3 = x1+x2
//     console.log(x3)
// }

// SumNPrint(x, y)
// SumNPrint(A, B)

// if (C.length > z) {
//     console.log(C)
// } else if (C.length < z) {
//     console.log(z)
// } else {
//     console.log("good job!")
// }

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"]

// function findTheBanana(fruit) {
//         if (fruit == "Banana") {
//             alert ("found the Banana in first array")
//         }
// }

// L1.forEach(findTheBanana)
// L2.forEach(findTheBanana)

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     var userName = document.getElementById("yName");
//     var userEmail = document.getElementById("yEmail");
//     var userText = document.getElementById("comments");
//     var msg = document.getElementById("ValidateMsg")

//     if(!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
//         event.preventDefault();
//         msg.innerHTML = "Please fill out the form correctly so I can get back to you"
//         console.log("Validated")
//     }
//     else {
//         msg.innerHTML = "";
//     }
// });

function validate() {
    formName = document.getElementById("name");
    email = document.getElementById("email");
    comment = document.getElementById("comments");
    validationMessage = document.getElementById("ValidateMsg");
    console.log("Form submission attempted");
    if (!formName.checkValidity()) {
        validationMessage.innerHTML= 'Please enter your name.';
        validationMessage.style.display = "block";
        console.log("Name valid:", formName.checkValidity());
    } else if (!email.checkValidity()) {
        validationMessage.innerHTML = 'Please enter a valid email address.';
        console.log("Email valid:", email.checkValidity());
    } else if (!comment.checkValidity()) {
        validationMessage.innerHTML = 'Please enter your message.';
        console.log("Message valid:", comment.checkValidity());
    }

}

function addYear() {
    let d = new Date();
    let y = d.getFullYear();
    let E = document.getElementById("copyYear");
    console.log("addYear function executed.");

    // E.innerHTML = "Designed and coded by Sonia Batheja © " + y;
    E.innerHTML += y;
    
    // E.innerHTML + y;
}

window.onLoad = addYear();

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

// function showList() {
//     console.log("ran showList")
//     document.getElementById("funList").style.display = "block";  // Show list
//     document.getElementById("showButton").style.display = "none"; // Hide button
// }

$(document).ready(function () {
    $("#readMore").click(function () {
        $("#shortIntro").hide();
        $("#intro").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function () {
        $("#shortIntro").show();
        $("#intro").hide();
        $("#readMore").show();
        $("#readLess").hide();
    });
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Couldn't fetch advice. Try again.";
        });
}
