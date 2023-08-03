export interface UserDB {
    id: string,
    username: string,
    profile_img_url: string
}

export interface UserModel {
    id: string,
    username: string,
    profileImgUrl: string
}

export class User {
    constructor(
        private id: string,
        private username: string,
        private profileImgUrl: string
    ) { }

    getId(): string {
        return this.id
    }

    setID(value: string): void {
        this.id = value
    }

    getUsername(): string {
        return this.username
    }

    setUsername(value: string): void {
        this.username = value
    }

    getProfileImgUrl(): string {
        return this.profileImgUrl
    }

    setProfileImgUrl(value: string): void {
        this.profileImgUrl = value
    }
    public toUserDB(): UserDB {
        return {
            id: this.id,
            username: this.username,
            profile_img_url: this.profileImgUrl
        }
    }

    public toUserModel(): UserModel {
        return {
            id: this.id,
            username: this.username,
            profileImgUrl: this.profileImgUrl
        }
    }
}

