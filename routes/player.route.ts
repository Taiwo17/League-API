import express from 'express'
import PlayerController from '../controllers/player.controller'

const router = express.Router()

router.route('/create-player/:teamId').post(PlayerController.createPlayer)
router.route('/get-player/:playerId').get(PlayerController.getOnePlayer)
router.route('/all-players').get(PlayerController.getAllPlayers)
router.route('/update-player/:playerId').put(PlayerController.updatePlayer)
router.route('/delete-player/:playerId').delete(PlayerController.deletePlayer)

export default router
