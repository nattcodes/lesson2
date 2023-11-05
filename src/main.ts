import './style.css'
import ListTemplates from './Templates/ListTemplates'
import FullList from './models/FullList'
import ListItem from './models/ListItem'



const fulllist = FullList.instance
const listTemplate = ListTemplates.instance
const form = document.getElementById('itemEntryForm') as HTMLFormElement



form.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    const inputText = document.getElementById('newItem') as HTMLInputElement
    const newText: string = inputText.value.trim()
    if (!newText.length) return

    const itemId: number = fulllist.list.length 
    ? parseInt(fulllist.list[fulllist.list.length - 1].id) + 1
    : 1

    const newItem = new ListItem( itemId.toString(), newText)

    fulllist.addItem(newItem)
    listTemplate.render(fulllist)
    inputText.value = ""
    
})
const clearAll = document.getElementById('clearItemsButton') as HTMLButtonElement
clearAll.addEventListener('click', (): void => {
    fulllist.clearList()
    listTemplate.clear()
})
fulllist.load()
listTemplate.render(fulllist)

