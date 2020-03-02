import {TaskStatusType} from '@app/modules/project-detail/board/shared';
import {MemberModel} from '@app/models/project/member.model';

export class TaskModel {
    id: number;
    projectId: number;
    listId: number;
    createdByUserId: number;

    createdAt: Date;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    priority: number;
    dueDate?: Date;

    status: TaskStatusType;
    isCompleted: boolean;
    order: number;
    assignTo: MemberModel;

    memberIds: number[];
    // Attachment
    // attachments: AttachmentModel[];
    isUploading: boolean;
    uploadingPercent: number;

    //
    // UI only
    isCollapsedDescription: boolean;
    // priorityObject: PrioritySettingModel;
    // members: MemberModel[];
    // activities: ActivityModel[];
    // comments: TaskCommentModel[];
    // labels: TaskLabelModel[];
    // isSubscribed: boolean;
    // createdByUserName: string;
    // checklists: ChecklistModel[];
    totalComments: number = 0;
    totalChecklistItem: number = 0;
    totalChecklistItemIsCompleted: number = 0;
    totalAttachments: number = 0;

    isActivityLoaded: boolean;
    isDragging: boolean;
    progressTask: string;
    progressIsDone: boolean;
    isHidden: boolean;
    isLoaded: boolean;

    constructor(init?: Partial<TaskModel>) {
        this.totalComments = 0;
        this.isCompleted = false;
        Object.assign(this, init);
    }
}
