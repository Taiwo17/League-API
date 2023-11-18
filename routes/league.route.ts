import express from 'express'
import LeagueController from '../controllers/league.controller'

const router = express.Router()

router.route('/create-league').post(LeagueController.createLeague)

export default router
