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
            window.location.href = "../level1/level1.html"; 
        }

        const correctPassword = "gdgusar{level0}";

        

        window.onload = requestPassword;