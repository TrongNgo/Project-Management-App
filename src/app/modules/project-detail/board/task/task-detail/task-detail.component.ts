import {Component, OnInit, EventEmitter, Input, Output, ViewChild, DoCheck} from '@angular/core';
import {DxValidationGroupComponent} from 'devextreme-angular';
import {cloneDeep, isEqual} from 'lodash';

import {AppNotify} from '@app/utilities';

import {ProjectDetailModel} from '@app/models/project/project.model';
import {PROJECT_STATUS} from '@app/modules/projects/shared/constants';
import {ClientService, ProjectService} from '@app/services/project';
import {ClientModel} from '@app/models/project';
import {TASK_STATUS, TaskStatusType} from '@app/modules/project-detail/board/shared';
import {TaskModel} from '@app/models/project/task/task.model';

@Component({
    selector: 'app-task-detail',
    templateUrl: 'task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit, DoCheck {

    private _visible: boolean = false;

    @Input() project: ProjectDetailModel;
    @Input()
    get visible(): boolean {
        return this._visible;
    }

    set visible(value: boolean) {
        this._visible = value;
        this.visibleChange.emit(value);
    }
    // don't use on before setter , like onVisibleChange
    @Output() visibleChange = new EventEmitter();
    @Output() onSuccess = new EventEmitter();
    @Output() onCancel = new EventEmitter<boolean>();

    editingTask: TaskModel;

    taskName = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
    taskState = TaskStatusType.NotStarted;

    TASK_STATUS = TASK_STATUS;
    min: Date = new Date();
    minStartDate: Date;

    isProcessing: boolean = false;

    members = [
        {
            id: 1,
            firstName: 'Trong',
            lastName: 'Ngo',
            fullName: 'Trong Ngo',
            nameAvatar: 'TN',
            email: 'trong.ngo@enlabsoftware.com',
            avatarImg: null
        },
        {
            id: 2,
            firstName: 'Loc',
            lastName: 'Nguyen',
            fullName: 'Loc Nguyen',
            nameAvatar: 'LN',
            email: 'loc.nguyen@enlabsoftware.com',
            avatarImg: null
        },
        {
            id: 3,
            firstName: 'Tan',
            lastName: 'Nguyen',
            fullName: 'Tan Nguyen',
            nameAvatar: 'TN',
            email: 'tan.nguyeno@enlabsoftware.com',
            avatarImg: null
        }
    ];
    assignTo;

    constructor() {
    }

    ngOnInit() {
        this.cloneSource();
        console.log('TASK_STATUS', this.members);

        if (!!!this.editingTask) {
            this.editingTask = new TaskModel();
        }
    }

    cloneSource() {
    }

    ngDoCheck() {
    }

    displayStateText(data) {
        if (data) {
            return `${data.text}`;
        }
        return '';
    }

    displayStateColor(data) {
        if (data) {
            return `${data.color}`;
        }
        return '';
    }

    closePopup() {
        this.visible = false;
    }

    // date
    onStartDateChange() {
        this.minStartDate = this.editingTask.startDate;
    }

    // assign to
    displayMemberInfo(member) {
        if (member) {
            return `${member.fullName} - ${member.email}`;
        }
        return '';
    }
}
