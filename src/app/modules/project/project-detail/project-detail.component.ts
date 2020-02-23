import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

import {ProjectDetailModel} from '@app/models/project/project.model';
import {PROJECT_STATUS} from '@app/modules/project/shared/constants';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})

export class ProjectDetailComponent implements OnInit {
    private _visible: boolean = false;
    private _project: ProjectDetailModel;

    @Input()
    get project(): ProjectDetailModel {
        return this._project;
    }

    set project(value: ProjectDetailModel) {
        this._project = value;
        this.projectChange.emit(value);
    }

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
    @Output() projectChange = new EventEmitter<ProjectDetailModel>();

    clients: any;

    PROJECT_STATUS = PROJECT_STATUS;
    min: Date = new Date();

    isProcessing: boolean = false;

    constructor() {
        // cal API to get clients
    }

    ngOnInit() {
    }

    onCancelForm() {

    }

    onSaveForm() {

    }

}
