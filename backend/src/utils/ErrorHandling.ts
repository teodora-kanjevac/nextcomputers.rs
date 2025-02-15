export const isNaNObject = (object: string, id: any): void => {
    if (isNaN(id)) {
        throw new Error(`Invalid ${object} ID`)
    }
}

export const isNullObject = (objectName: string, id: any, object: any): void => {
    if (!object) {
        throw new Error(`${objectName} with ID = ${id} not found`)
    }
}
