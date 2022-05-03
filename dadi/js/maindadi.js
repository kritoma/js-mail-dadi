const button = document.querySelector(".btn")
const user = document.querySelector(".user_result")
const cpu = document.querySelector(".cpu_result")
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")
const draw = document.querySelector(".draw")

// azione del dado
button.addEventListener('click', 
    function() {
        // lancio del dado random
        let userResult = (Math.floor(Math.random() * 6) + 1);
        let cpuResult = (Math.floor(Math.random() * 6) + 1)
        user.innerHTML = "Il tuo risultato è: " + (userResult);
        cpu.innerHTML = "Il risultato della CPU è: " + (cpuResult);

        // mostra il vincitore
        if(userResult > cpuResult) {
            win.classList.add("active")
            lose.classList.remove("active")
            draw.classList.remove("active")
        } else if (userResult < cpuResult) {
            lose.classList.add("active")
            win.classList.remove("active")
            draw.classList.remove("active")
        } else {
            draw.classList.add("active")
            win.classList.remove("active")
            lose.classList.remove("active")
        }
    }

);
