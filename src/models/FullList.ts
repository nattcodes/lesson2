import ListItem from "./ListItem";

interface Lists {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements Lists {
    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list
    }
   
    load(): void {
        const storedList: string | null = localStorage.getItem("myItem")
        if (typeof storedList !== "string") return

        const parsedList: {
            _id: string,
            _item: string,
            _checked: boolean
        }[] = JSON.parse(storedList)

        parsedList.forEach( itemObj => {
            const newListItem = new ListItem( itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
        
    }

    save(): void {
        localStorage.setItem("myItem", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}