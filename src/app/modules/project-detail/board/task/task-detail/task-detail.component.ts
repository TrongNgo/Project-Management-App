import {Component, OnInit, EventEmitter, Input, Output, ViewChild, DoCheck} from '@angular/core';
import {DxValidationGroupComponent} from 'devextreme-angular';
import {cloneDeep, isEqual} from 'lodash';

import {AppNotify} from '@app/utilities';

import {ProjectDetailModel} from '@app/models/project/project.model';
import {PROJECT_STATUS} from '@app/modules/projects/shared/constants';
import {ClientService, ProjectService} from '@app/services/project';
import {ClientModel} from '@app/models/project';

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

    editingProject: ProjectDetailModel;
    clients: ClientModel[] = [];

    PROJECT_STATUS = PROJECT_STATUS;
    min: Date = new Date();
    minStartDate: Date;

    isProcessing: boolean = false;
    isFormDirty: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.cloneSource();
    }

    cloneSource() {
        this.editingProject = cloneDeep(this.project);
    }

    ngDoCheck() {
        this.isFormDirty = !isEqual(this.editingProject, this.project);
    }

    showProcessing() {
        setTimeout(() => {
            this.isProcessing = true;
        });
    }

    hideProcessing() {
        setTimeout(() => {
            this.isProcessing = false;
        });
    }

    submitForm() {

    }

    saveProjectDetail(isUpdated: boolean) {

    }



    handleUpdateProjectDetail(): Promise<boolean>  {
        if (this.isFormDirty && this.editingProject.id) {
            return new Promise<boolean>((resolve, reject) => {
                resolve(true);
            });
        } else {
            return new Promise<boolean>((resolve, reject) => {
                resolve(false);
            });
        }
    }

    onCancelForm() {

    }

    isValidateProjectInfo() {

    }

    displayClientInfo(client) {

    }
}
