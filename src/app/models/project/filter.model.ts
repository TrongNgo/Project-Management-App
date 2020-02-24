export class FilterModel {
    status: FilterItem[];

    constructor(init?: Partial<FilterModel>) {
        Object.assign(this, init);
    }
}

export class FilterItem {
    value: number;
    text: string;
    isChecked?: boolean

    constructor(init?: Partial<FilterItem>) {
        Object.assign(this, init);
    }
}