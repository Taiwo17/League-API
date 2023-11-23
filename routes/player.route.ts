import express from 'express'
import PlayerController from '../controllers/player.controller'
import { adminCheck, superAdminCheck, verifyToken } from '../utils/verifyToken'

const router = express.Router()

// User, Admin and Super Admin can get one and all player
router.get('/get-player/:playerId', verifyToken, PlayerController.getOnePlayer)
router.get('/all-players', verifyToken, PlayerController.getAllPlayers)

// Only Admin and Super Admin can create a player
router.post('/create-player/:teamId', adminCheck, PlayerController.createPlayer)

// Only Super Admin can update and delete a player
router.put(
  '/update-player/:playerId',
  superAdminCheck,
  PlayerController.updatePlayer
)
router.delete(
  '/delete-player/:playerId',
  superAdminCheck,
  PlayerController.deletePlayer
)

router.patch(
  '/set-captain/:playerId',
  superAdminCheck,
  PlayerController.setCaptain
)

export default router
