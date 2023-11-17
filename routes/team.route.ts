import express from 'express'
import TeamController from '../controllers/team.controller'

const router = express.Router()

router.route('/create-team').post(TeamController.createTeam)

export default router
