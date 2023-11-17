import express from 'express'
import TeamRouter from './team.route'
import PlayerRouter from './player.route'

const router = express.Router()

router.use('/api/v1', TeamRouter)
router.use('/api/v1', PlayerRouter)

export default router
