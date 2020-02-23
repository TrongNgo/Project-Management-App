import { ProjectStatusType } from '@app/modules/project/shared/enums';

export class ProjectViewModel {
    id: number;
    projectId: number;
    projectName: string;
    urlName: string;
    clientId: number;
    clientName: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    status: ProjectStatusType;
    memberCount: number;
    completedTaskCount: number;
    taskCount: number;
    milestoneCount: number;
    imageUrl: string;


    constructor(init ?: Partial<ProjectViewModel>) {
        Object.assign(this, init);
    }
}

export class ProjectDetailModel {
    id: number;
    projectId: number;
    name: string;
    urlName: string;
    clientId: number;
    clientName: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    status: ProjectStatusType;
    imageUrl: string;

    creatorId: number;
    isProjectManager: boolean;

    constructor(init ?: Partial<ProjectDetailModel>) {
        Object.assign(this, init);
    }
}

export class ProjectModel {

}
