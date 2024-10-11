import type { SpecificationsDTO } from '~/shared/types/ProductDTO'

export class Specifications {
    public specs: { [key: string]: string }

    constructor(specifications: SpecificationsDTO) {
        this.specs = specifications
    }
}
