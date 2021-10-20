

//collegare il prompt con il loop utilizzando il condizionale
//Assegnare un event listener a una cella utilizzando "This"



//STRUMENTI
const container = document.querySelector(".container")

//Chiedere all'utente un livello di difficolta
const userDifficulty = prompt("Scegli un numero tra: [1] [2] o [3]")

let maxValue = 0
if (userDifficulty == 1) {
    maxValue = 100;

} else if (userDifficulty == 2) {
    maxValue = 81;

} else if (userDifficulty == 3) {
    maxValue = 49;

} else {
    alert("Devi inserire: 1 o 2 o 3")

}

//generare una griglia a seconda del livello 
//difficoltà 1 => tra 1 e 100
//difficoltà 2 => tra 1 e 81
// difficoltà 3 => tra 1 e 49

for (let i = 1; i <= maxValue; i++) {
    const divEl = document.createElement('div')
    divEl.className = "cell"
    divEl.append(i)
    container.append(divEl)

    divEl.addEventListener("click", function () {
        divEl.classList.add("blue")
    })
}



// const cellElement = `<div class="cell">${i}</div>`
// container.insertAdjacentHTML('beforeend', cellElement)

// const cell = document.querySelector(".cell")
// cell.addEventListener("click", function () {

//     console.log(cell.classList);
// })
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

