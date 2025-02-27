document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled!");
});

document.addEventListener("keydown", function(event) {
    if (
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.key === "F12") 
    ) {
        event.preventDefault();
        alert("Developer tools are disabled!");
    }
});

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
            window.location.href = "../level3/level3.html"; 
        }


        const correctPassword = "nimit{yehToEasyTha}";

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

