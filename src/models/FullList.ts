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
    // set list(list: ListItem[]){
    //     this._list = list
    // }
    
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