import {Component, Input, OnInit} from '@angular/core';
import {ProjectViewModel} from '@app/models/project/project.model';
import {PROJECT_STATUS} from '@app/modules/projects/shared/constants';
import {ProjectStatusType} from '@app/modules/projects/shared/enums';

@Component({
    selector: 'app-project-item',
    templateUrl: 'project-item.component.html',
    styleUrls: ['./project-item.component.scss']
})

export class ProjectItemComponent implements OnInit {
    @Input() project: ProjectViewModel;

    projectStatus = PROJECT_STATUS;
    projectStatusType = ProjectStatusType;

    ngOnInit() {
    }

}
