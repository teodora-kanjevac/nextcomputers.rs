export class Specifications {
    [key: string]: string

    constructor(specifications: any) {
        Object.assign(this, specifications);
    }
}
