export class ListModel {
    id: number;
    projectId: number;
    name: string;
    order: number;
    createdAt: Date;

    tmpTitle: string;
    tmpProjectId: number;
    isSubscribed: boolean;
    isEditingTitle: boolean = false;
    isEditing: boolean = false;
    // tasks: TaskModel[] = [];
    disabled: boolean;
    isDragging: boolean;

    constructor(init?: Partial<ListModel>) {
        Object.assign(this, init);
    }
}