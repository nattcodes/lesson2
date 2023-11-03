import './style.css'

const list = document.getElementById('list') as HTMLUListElement
const form = document.getElementById('form') as HTMLFormElement
const inputText = document.getElementById('form-input-text') as HTMLInputElement
const btn = document.getElementById('btn') as HTMLInputElement

form?.addEventListener("submit", e => {
    e.preventDefault()
    console.log("e")
})