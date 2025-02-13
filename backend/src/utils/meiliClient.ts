import { MeiliSearch } from 'meilisearch'
import dotenv from 'dotenv'

dotenv.config()

export const client = new MeiliSearch({
    host: 'http://localhost:7700',
    apiKey: process.env.MEILI_API_KEY,
})
