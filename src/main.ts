import './style.css'

const list = document.getElementById('list') as HTMLUListElement
const form = document.getElementById('form') as HTMLFormElement
const inputText = document.getElementById('form-input-text') as HTMLInputElement

form.addEventListener("submit", e => {
    e.preventDefault()
    if (inputText.value == "" || inputText.value == null) return


    const task = {
        
        title: inputText.value,
        completed: false,
        createdAt: new Date()
    }
})