
export class MemberModel {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    nameAvatar: string;
    email: string;
    avatarImg: string;

    constructor(init?: Partial<MemberModel>) {
        Object.assign(this, init);
    }
}
