import express from 'express'
import TeamController from '../controllers/team.controller'
import { superAdminCheck } from '../utils/verifyToken'

const router = express.Router()

// Only Admin and Super Admin can create a team
router.post(
  '/create-team/:leagueId',
  superAdminCheck,
  TeamController.createTeam
)

export default router
