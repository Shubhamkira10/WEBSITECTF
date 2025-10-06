const allowedLetters = ["1", "0"];

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
    window.location.href = "../level8/level8.html"; 
}

const correctPassword = "gdgusar{level7}";

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

const secret = "usdi -> ug";  
if (userLocation.includes(secret)) {  
    revealClue()
   /* Khwaabon ka bolbaala hai,
    Na iske bina tumhara guzara hai.
    lafzon me nahi tasveeron me baat hai
    aur Jo dekhe gehraai se, khazana uske haath hai!; 
    
    
    */
} else {  
    console.warn("DORA THE EXPLORERS");  
}

