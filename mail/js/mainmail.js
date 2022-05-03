const listEmail = ["franco@gmail.com", "romolo@gmail.com", "sandro@gmail.com", "piccinini@gmail.com"];
const userEmail = prompt("Inserisci la tua Email");

for (let i = 0; i < listEmail.length; i++) {
    if (userEmail === listEmail[i]) {
        document.querySelector(".text").innerHTML = "benvenuto"
        break
    } else {
        document.querySelector(".text").innerHTML = "non è in lista"
    }
    
}