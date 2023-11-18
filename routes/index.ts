import express from 'express'
import TeamRouter from './team.route'
import PlayerRouter from './player.route'
import LeagueRouter from './league.route'

const router = express.Router()

router.use('/api/v1', TeamRouter)
router.use('/api/v1', PlayerRouter)
router.use('/api/v1', LeagueRouter)

export default router
