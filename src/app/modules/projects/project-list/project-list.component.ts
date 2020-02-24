import {Component, OnInit, ViewChild} from '@angular/core';
import {DxButtonComponent, DxListComponent} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import {ProjectDetailModel, ProjectViewModel} from '@app/models/project/project.model';
import {ProjectService} from '@app/services/project/project.service';
import {ProjectStatusType} from '@app/modules/projects/shared/enums';
import {PROJECT_FILTER_TYPE, PROJECT_STATUS} from '@app/modules/projects/shared/constants';
import {FilterItem, FilterModel} from '@app/models/project';

@Component({
    selector: 'app-project-list',
    templateUrl: 'project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {
    @ViewChild('list', {static: false}) list: DxListComponent;
    @ViewChild('prevBtn', { static: false }) prevBtn: DxButtonComponent;
    @ViewChild('nextBtn', { static: false }) nextBtn: DxButtonComponent;

    dataSource: DataSource;
    pageSize: number = 3;
    totalProjectCount: number;
    maxPage: number;

    projectList: ProjectViewModel[] = [];
    filteringProjectList: ProjectViewModel[] = [];
    newProject: ProjectDetailModel;

    PROJECT_FILTER_TYPE = PROJECT_FILTER_TYPE;
    projectFilterStatus: FilterItem[] = [];

    isProcessing: boolean = false;
    isOpenProjectDetailPopup: boolean = false;
    isOpenFilterStatusPopup: boolean = false;

    constructor(private projectService: ProjectService) {
    }

    ngOnInit() {
        this.getProjects();

        PROJECT_STATUS.forEach((status) => {
            this.projectFilterStatus.push({
                value: status.value,
                text: status.text,
                isChecked: false
            });
        });
    }

    getProjects() {
        this.projectService.getProjectsForView().subscribe((projects) => {
            this.projectList = projects;
            this.filteringProjectList = projects;
            this.configureDataSource(this.filteringProjectList);
        });
    }

    configureDataSource(projects: ProjectViewModel[]) {
        this.dataSource = new DataSource({
            store: projects,
            sort: 'id',
            paginate: true,
            pageSize: this.pageSize,
            requireTotalCount: true
        });

        this.dataSource.load().then((items, extra) => {
            this.totalProjectCount = extra.totalCount;
            this.maxPage = Math.ceil(this.totalProjectCount / this.pageSize);
        });
    }

    nextClick(e) {
        const newIndex = this.dataSource.pageIndex() + 1;
        if (newIndex === (this.maxPage - 1)) {
            this.nextBtn.instance.option('disabled', true);
        }
        this.prevBtn.instance.option('disabled', false);
        // go to next page
        this.dataSource.pageIndex(newIndex);
        this.changePage();
    }

    prevClick(e) {
        const prevIndex = this.dataSource.pageIndex() - 1;
        if (prevIndex === 0) {
            this.prevBtn.instance.option('disabled', true);
        }
        this.nextBtn.instance.option('disabled', false);

        this.dataSource.pageIndex(prevIndex);
        this.changePage();
    }

    changePage() {
        this.dataSource.load();
    }

    onNewProject() {
        this.newProject = new ProjectDetailModel({
            status: ProjectStatusType.open
        });

        this.isOpenProjectDetailPopup = true;
    }

    cancelPopup(visible: boolean) {
        this.isOpenProjectDetailPopup = visible;
    }

    // filter Project following status
    onOpenFilterStatus() {
        this.isOpenFilterStatusPopup = true;
    }

    changeProjectStatus(statusValue) {
        this.projectFilterStatus.forEach(status => {
            if (status.value === statusValue) {
                switch (status.isChecked) {
                    case true:
                        status.isChecked = false;
                        this.filteringProjectList = this.projectList;
                        this.configureDataSource(this.filteringProjectList);
                        break;
                    case false:
                        status.isChecked = true;
                        this.filterChanged(statusValue);
                        break;
                }
            } else {
                status.isChecked = false;
            }
        });
    }

    filterChanged(statusValue) {
        this.filteringProjectList = this.projectList.filter(p => p.status === statusValue);
        this.configureDataSource(this.filteringProjectList);
    }

}
