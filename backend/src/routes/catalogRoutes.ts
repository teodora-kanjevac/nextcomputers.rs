import { Router } from 'express'
import { getCatalog } from '~/src/controllers/catalogController'
import authAPI from '../middleware/authAPI'

const router: Router = Router()

router.get('/', authAPI, getCatalog)

export default router