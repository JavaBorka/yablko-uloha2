console.log("OK")

/////////////
// Úloha 2 //
/////////////


// 2a) Funkcia, ktorá vytvorí card
const cardContainer = document.querySelector(".cards ul")

// const addCard = (nadpis, text) => {

//     let newCard = document.createElement("li")

//     newCard.innerHTML = `
//         <h3>${nadpis}</h3>
//         <p>
//             ${text}
//         </p>

//     `

//     cardContainer.appendChild(newCard)
// }

// addCard("Super nadpis" , "Toto je veľmi krátky a veľmi nudný text")

// 2b) Nadpis a text pridáme cez inputy

document.querySelector(".form form")
    .addEventListener("submit", (event) => {
        event.preventDefault()

        let nadpisInput = document.querySelector("#nadpis")
        let nadpis = nadpisInput.value

        let textInput = document.querySelector("#text")
        let text = textInput.value

        let indexClassName = nadpis.indexOf(" ");

        document.querySelector(".form").innerHTML = `
            <h3>${nadpis}</h3>
            <p>
                ${text}
            </p>
        `
    })

// 2 c) Upravíme funkciu tak, že bude pracovať s poľom objektov

const addCard = (nadpis, text) => {

    let newCard = document.createElement("li")
    newCard.classList.add("animate__animated", "animate__bounce", "animate__slow")

    newCard.innerHTML = `
        <h3>${nadpis}</h3>
        <p>
            ${text}
        </p>

    `

    cardContainer.appendChild(newCard)
}

let cards = [
    {
        nadpis: "Prvy nadpis",
        text: "text1"
    },
    {
        nadpis: "Druhy nadpis",
        text: "text2"
    },
    {
        nadpis: "Treti nadpis",
        text: "text3"
    },
    {
        nadpis: "Stvrty nadpis",
        text: "text4"
    }
]

cards.forEach((card) => {
    addCard(card.nadpis, card.text)
})

// 2 d) Načítaj toto pole zo súboru

/////////////
// DOPLNIŤ //
////////////

// 3 a) Pridaj na každý card animáciu