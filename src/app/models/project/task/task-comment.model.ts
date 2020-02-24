export class TaskCommentModel {
    id: number;
    taskId: number;
    fromUserId: number;
    createdDate: Date;
    updatedDate?: Date;
    content: string;
    type: number;
    status: number;
    link: string;

    // UI Only
    firstName: string;
    lastName: string;
    avatarImg: string;
    nameAvatar: string;
    fullName: string;
    isEditing: boolean;
    isSaving: boolean;
    isHidden: boolean;
    tmpContent: string;
    tmpSubComment: string;
    isSubCommentsShown: boolean = true;
    isSubCommentAdding: boolean = false;


    // For reply comment
    subComments: TaskCommentModel[];

    constructor(init?: Partial<TaskCommentModel>) {
        // this.type = CommentType.Comment;
        // this.status = CommentStatus.None;
        Object.assign(this, init);
    }
}