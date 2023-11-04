import FullList from "../models/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fulllist: FullList): void,
}

export default class ListTemplates implements DOMList {
    ul: HTMLUListElement
    static instance: ListTemplates = new ListTemplates()
    private constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }
    clear():void {
        this.ul.innerHTML = ""
    }
    render(fulllist: FullList): void {
        this.clear()
        fulllist.list.forEach(item => {
            const listOfUl = document.createElement('li') as HTMLLIElement
            listOfUl.className = "item"

            const checkBox = document.createElement('input') as HTMLInputElement
            checkBox.type = "checkbox"
            checkBox.id = item.id
            checkBox.checked = item.checked
            listOfUl.append(checkBox, item.item)

            checkBox.addEventListener("change", () => {
                item.checked = !item.checked
                fulllist.save()
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.id = item.id
            listOfUl.append( label)
            

            const btn = document.createElement('button') as HTMLButtonElement
            btn.className = "button"
            btn.textContent = "X"
            listOfUl.append(btn)

            btn.addEventListener("click", () => {
                fulllist.removeItem(item.id)
                this.render(fulllist)
            })

            this.ul.append(listOfUl)
        })
    }
}