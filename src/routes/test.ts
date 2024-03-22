import express from 'express'
import controller from '../controllers/test.controller'

const router = express.Router()

router.get('/test-route', controller.testFunction)

export default router