import './style.css'


// const list = document.getElementById('list') as HTMLUListElement
// const form = document.getElementById('form') as HTMLFormElement
// const inputText = document.getElementById('form-input-text') as HTMLInputElement
// interface taskItem {
//     id?: string,
//     title: string,
//     completed: boolean,
//     createdAt: Date
// }
// form?.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if (inputText?.value == "" || inputText?.value == null) return


    
//     const newTask:taskItem = {
        
//         title: inputText.value,
//         completed: false,
//         createdAt: new Date()
//     }

//     addListItem(newTask)
// })

// function addListItem(task:taskItem) {
//     const item = document.createElement('li')
//     const label = document.createElement('label')
//     const checkBox = document.createElement('input')
//     checkBox.type = "checkbox"
//     label.append(checkBox, task.title)
//     item.append(label)
//     list.append(item)
// }

const form = document.getElementById('itemEntryForm') as HTMLFormElement
const inputText = document.getElementById('newItem') as HTMLInputElement
const listItem = document.getElementById('listItems') as HTMLUListElement
const btn = document.getElementById('addItem') as HTMLButtonElement

type Item = {
    id: string,
    item: string,
    checked: boolean
}

btn?.addEventListener("click", (e) => {
    e.preventDefault();

    if(inputText.value == '' || inputText.value == null) return

    const newValueItem: Item = {
        id:inputText.id,
        item: inputText.value,
        checked: false
    }
 addListItem(newValueItem)
})

function addListItem(valueItem: Item) {
    const listOfUl = document.createElement('li')
    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    const label = document.createElement('label')
    label.append(checkBox, valueItem.item)
    listOfUl.append(label)
    listItem.append(listOfUl)
}