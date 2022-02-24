import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { findLostTrnRoutes } from './routes/find-a-lost-trn.js'
import { apiRoutes } from './routes/api.js'
import { userResearch } from './routes/user-research.js'

const router = express.Router()
exampleWizardRoutes(router)
findLostTrnRoutes(router)
apiRoutes(router)
userResearch(router)

export default router
