import {Component, OnInit, EventEmitter, Input, Output, ViewChild, DoCheck} from '@angular/core';
import {DxValidationGroupComponent} from 'devextreme-angular';
import {cloneDeep, isEqual} from 'lodash';

import {AppNotify} from '@app/utilities';

import {ProjectDetailModel} from '@app/models/project/project.model';
import {PROJECT_STATUS} from '@app/modules/project/shared/constants';
import {ClientService, ProjectService} from '@app/services/project';
import {ClientModel} from '@app/models/project';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})

export class ProjectDetailComponent implements OnInit, DoCheck {
    @ViewChild('validationGroup', {static: false}) validationGroup: DxValidationGroupComponent;

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

    constructor(private clientService: ClientService,
                private projectService: ProjectService) {
    }

    ngOnInit() {
        this.cloneSource();

        this.clientService.getClients().subscribe((clients) => {
            this.clients = clients;
        });
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

    onStartDateChange() {
        this.minStartDate = this.project.startDate;
    }

    submitForm() {
        setTimeout(() => {
            if (!this.isValidateProjectInfo()) {
                return;
            }

            this.handleUpdateProjectDetail().then((isUpdated) => {
                this.saveProjectDetail(isUpdated);
            });
        });
    }

    saveProjectDetail(isUpdated: boolean) {
        this.isProcessing = true;

        this.projectService.updateProject().subscribe((result) => {
           this.editingProject.id = this.editingProject.id ? this.editingProject.id : result.id;
           this.editingProject.projectId =
               this.editingProject.projectId ? this.editingProject.projectId : result.projectId;

           const message = isUpdated ? 'Updated successful' : 'Created successful';
           AppNotify.success(message);

           this.project = cloneDeep(this.editingProject);
           this.onSuccess.emit();
           this.hideProcessing();
        }, error => {
            this.hideProcessing();
        });

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
        if (this.isFormDirty && this.editingProject) {
            const confirmTitle = 'Confirm';
            const confirmQuestion = 'Are you sure to leave?';
            AppNotify.confirm(confirmQuestion, confirmTitle).then((result) => {
                if (result) {
                    this.editingProject = cloneDeep(this.project);
                    this.onSuccess.emit(null);
                    this.onCancel.emit(false);
                }
            });
        } else {
            this.onCancel.emit(false);
        }
    }

    isValidateProjectInfo() {
        if (!this.validationGroup.instance.validate().isValid) {
            AppNotify.error('Data is invalid');
            return false;
        }
        return true;
    }

    displayClientInfo(client) {
        if (client) {
            return `${client.fullName} - ${client.email}`;
        }
        return '';
    }
}
