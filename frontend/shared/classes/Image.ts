export class Image {
    public image: string;
    public thumbnail: string;

    constructor(imageUrl: any) {
        this.image = imageUrl.image
        this.thumbnail = imageUrl.thumbnail
    }
}