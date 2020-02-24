import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProjectService} from '@app/services/project';
import {ProjectDetailModel} from '@app/models/project';
import {PROJECT_STATUS} from '@app/modules/projects/shared/constants';
import {ProjectStatusType} from '@app/modules/projects/shared/enums';

@Component({
    selector: 'app-project-detail',
    templateUrl: 'project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})

export class ProjectDetailComponent implements OnInit {

    project: ProjectDetailModel;

    PROJECT_STATUS = PROJECT_STATUS;
    projectStatusType = ProjectStatusType;

    constructor(private projectService: ProjectService,
                private _route: ActivatedRoute) {

    }

    ngOnInit() {
        const projectName = this._route.snapshot.params.projectName;
        this.projectService.getProjectDetail(projectName).subscribe((project) => {
            this.project = project;
        });
    }

}
