import { Request, Response } from 'express'
import { fetchCatalog } from '~/src/services/catalogService'
import { XMLBuilder } from 'fast-xml-parser'

export const getCatalog = async (req: Request, res: Response): Promise<void> => {
    try {
        const catalog = await fetchCatalog()
        const builder = new XMLBuilder();
        const catalogXML = builder.build({
            products: {
                product: catalog  
              }
        });

        res.type('application/xml').send(catalogXML);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}