

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

function showList() {
    console.log("ran showList")
    document.getElementById("funList").style.display = "block";  // Show list
    document.getElementById("showButton").style.display = "none"; // Hide button
}

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

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}


function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

window.onload = function() {
    addYear();
    greetingFunc();
    highlightActiveLink();
};
