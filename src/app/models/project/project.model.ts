import { ProjectStatusType } from '@app/modules/projects/shared/enums';

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
    isNew: boolean = false;

    creatorId: number;
    isProjectManager: boolean;

    constructor(init ?: Partial<ProjectDetailModel>) {
        Object.assign(this, init);
    }
}

export class ProjectModel {
    id: number;
    description: string;
    createdDate: Date;
    projectName: string;
    status: ProjectStatusType;
    creatorId: number;

    // lists: ListModel[];
    // members: MemberModel[];
    // attachments: AttachmentModel[];

    // Filter
    // filters: FilterModel;

    constructor(init ?: Partial<ProjectModel>) {
        Object.assign(this, init);
    }
}
