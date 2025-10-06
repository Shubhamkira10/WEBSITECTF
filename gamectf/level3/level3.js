
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled!");
});

document.addEventListener("keydown", function(event) {
    if (
        (event.ctrlKey && event.shiftKey && event.key === "I") ||  // Ctrl + Shift + I
        (event.ctrlKey && event.shiftKey && event.key === "J") ||  // Ctrl + Shift + J
        (event.ctrlKey && event.key === "U") ||  // Ctrl + U (View Source)
        (event.key === "F12")  // F12 Developer Tools
    ) {
        event.preventDefault();
        alert("Developer tools are disabled!");
        return false;  // Fully block the event
    }
});

// **Extra Protection: Disable `Ctrl + S`, `Ctrl + P`, and `Ctrl + Shift + C`**
document.addEventListener("keydown", function(event) {
    if (
        (event.ctrlKey && event.key === "S") ||  // Ctrl + S (Save Page)
        (event.ctrlKey && event.key === "P") ||  // Ctrl + P (Print Page)
        (event.ctrlKey && event.shiftKey && event.key === "C") // Ctrl + Shift + C (Inspect Element)
    ) {
        event.preventDefault();
        alert("You are not allowed to do this!");
        return false;
    }
});


document.onkeydown = function(e) {
    if (e.ctrlKey && e.key === "u") {
        alert("View Source is disabled!");
        while (true) {}  
    }
};


const allowedLetters = ["1","0"];

function getRandomLetter() {
    return allowedLetters[Math.floor(Math.random() * allowedLetters.length)];
}

function createFallingLetters() {
    for (let i = 0; i < 20; i++) { 
        let letter = document.createElement("div");
        letter.classList.add("letter");
        letter.innerText = getRandomLetter();
        document.body.appendChild(letter);

        letter.style.left = Math.random() * window.innerWidth + "px";
        letter.style.animationDuration = 2 + Math.random() * 3 + "s";
        letter.style.fontSize = Math.random() * 20 + 10 + "px";
        
        setTimeout(() => letter.remove(), 5000);
    }
}

setInterval(createFallingLetters, 300);

function goToNextLevel() {
    window.location.href = "../level4/level4.html"; 
}


const correctPassword = "gdgusar{level3}";

function requestPassword() {
    let enteredPassword = prompt("Enter the password to access Level :");

    if (enteredPassword === correctPassword) {
        document.body.style.display = "block"; 
    } else {
        alert("Incorrect password! Redirecting...");
        window.location.href = "../index.html"; 
    }
}


window.onload = requestPassword;
