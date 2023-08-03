export interface VideoDB {
    id: string,
    creator_id: string,
    title: string,
    thumbnail_img_url: string,
    video_url: string,
    likes: number,
    dislikes: number,
    created_at: string
}

export interface LikesDeslikesDB {
    user_id: string,
    video_id: string,
    like: number
}

export interface VideoModel {
    id: string,
    title: string,
    thumbnailImgUrl: string,
    videoUrl: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    creator: {
        id: string,
        username: string,
        profileImgUrl: string
    }
}

export class Video {
    constructor(
        private id: string,
        private title: string,
        private thumbnailImgUrl: string,
        private videoUrl: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private creatorId: string,
        private creatorUsername: string,
        private creatorProfileImgUrl: string
    ) { }

    getId(): string {
        return this.id
    }

    setId(value: string): void {
        this.id = value
    }

    getTitle(): string {
        return this.title
    }

    setTitle(value: string): void {
        this.title = value
    }

    getThumbnailImgUrl(): string {
        return this.thumbnailImgUrl
    }

    setThumbnailImgUrl(value: string): void {
        this.thumbnailImgUrl = value
    }

    getVideoUrl(): string {
        return this.videoUrl
    }

    setVideoUrl(value: string): void {
        this.videoUrl = value
    }

    getLikes(): number {
        return this.likes
    }

    setLikes(value: number): void {
        this.likes = value
    }


    getDislikes(): number {
        return this.dislikes
    }

    setDislikes(value: number): void {
        this.dislikes = value
    }

    getCreatedAt(): string {
        return this.createdAt
    }

    setCreatedAt(value: string): void {
        this.createdAt = value
    }

    getCreatorId(): string {
        return this.creatorId
    }

    setCreatorId(value: string): void {
        this.creatorId = value
    }

    getCreatorUsername(): string {
        return this.creatorUsername
    }

    setCreatorUsername(value: string): void {
        this.creatorUsername = value
    }

    getCreatorProfileImgUrl(): string {
        return this.creatorProfileImgUrl
    }

    setCreatorProfileImgUrl(value: string): void {
        this.creatorProfileImgUrl = value
    }

    public toVideoDB(): VideoDB {
        return {
            id: this.id,
            creator_id: this.creatorId,
            title: this.title,
            thumbnail_img_url: this.thumbnailImgUrl,
            video_url: this.videoUrl,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt
        }
    }

    public toVideoModel(): VideoModel {
        return {
            id: this.id,
            title: this.title,
            thumbnailImgUrl: this.thumbnailImgUrl,
            videoUrl: this.videoUrl,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt,
            creator: {
                id: this.creatorId,
                username: this.creatorUsername,
                profileImgUrl: this.creatorProfileImgUrl
            }
        }
    }
}