import express from 'express'
import LeagueController from '../controllers/league.controller'
import { adminCheck, superAdminCheck, verifyToken } from '../utils/verifyToken'

const router = express.Router()

// User, Admin and Super Admin can get one and all Leagues
router.get('/get-leagues', verifyToken, LeagueController.getAllLeauge)

// Only Admin and Super Admin can create a player
router.post('/create-league', adminCheck, LeagueController.createLeague)

// Only Super Admin can update and delete a player
router.delete(
  '/delete-league/:leagueId',
  superAdminCheck,
  LeagueController.deleteLeague
)

export default router
