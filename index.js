import{createButton} from"./Assets/createButtom.js"
import { createCard } from "./Assets/CreateCard.js"
import { buttonDisabled } from "./Assets/buttonDisbled.js"
const minCards = 1
const state = {
    quantity: minCards,
}
createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")


addCard.addEventListener('click', () => {
    createCard()
    state.quantity++
        buttonDisabled(state.quantity)
})
const removeCard = document.querySelector("#removeCard")
removeCard.addEventListener('click', () => {
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
        buttonDisabled(state.quantity)
})