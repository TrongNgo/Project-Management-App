
export class MemberModel {
    userId: number;
    mobile: string;
    firstName: string;
    lastName: string;
    fullName: string;
    nameAvatar: string;
    employeeId?: number;
    email: string;
    avatarImg: string;

    // For project - work module
    isDeleteFromProject: boolean;

    // for UI
    isSelected: boolean = false;

    constructor(init?: Partial<MemberModel>) {
        Object.assign(this, init);
    }
}
