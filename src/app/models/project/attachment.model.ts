export class AttachmentModel {
    id: number;
    fileId: string;
    fileName: string;
    fileSize: number;
    fileExtension: string;
    extension: string;
    storageType: number;
    referenceId: number;
    createdDate: Date;
    createdByUserId: string;
    createdByName: string;
    isImage: boolean;
    //
    // UI Only
    isDeleting: boolean;
    isEditing: boolean;
    tmpName: string;
    imageLink: string;
    linkDownload: string;
    reviewLink: string;

    constructor(init?: Partial<AttachmentModel>) {
        Object.assign(this, init);
    }
}