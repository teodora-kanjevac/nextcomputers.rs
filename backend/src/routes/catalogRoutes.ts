import { Router } from 'express'
import { getCatalog } from '~/src/controllers/catalogController'

const router: Router = Router()

router.get('/', getCatalog)

export default router