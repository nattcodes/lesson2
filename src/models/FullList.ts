import ListItem from "./ListItem";

interface List {
    List: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {
    static instance: FullList = new FullList()

    private constructor(private _List: ListItem[] = []) {}
    
}