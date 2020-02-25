import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-board-list',
    templateUrl: 'board-list.component.html',
    styleUrls: ['./board-list.component.scss']
})

export class BoardListComponent implements OnInit {
    lists = [
        [{value: 'Not Started'}],
        [{value: 'Need Assistance'}],
        [{value: 'In Progress'}],
        [{value: 'Deferred'}]
    ];

    isOpenTaskDetailPopup: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    onListReorder(e) {
        const list = this.lists.splice(e.fromIndex, 1)[0];
        this.lists.splice(e.toIndex, 0, list);

        // const status = this.statuses.splice(e.fromIndex, 1)[0];
        // this.statuses.splice(e.toIndex, 0, status);
    }

    onTaskDragStart(e) {
        e.itemData = e.fromData[e.fromIndex];
    }

    onTaskDrop(e) {
        e.fromData.splice(e.fromIndex, 1);
        e.toData.splice(e.toIndex, 0, e.itemData);
    }

    openTaskDetail() {
        this.isOpenTaskDetailPopup = true;
    }

    createNewTask() {
        this.isOpenTaskDetailPopup = true;
    }
}
