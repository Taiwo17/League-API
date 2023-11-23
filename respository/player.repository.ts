import League from '../models/league.model'
import Players from '../models/player.model'
import Team from '../models/teams.model'

const PlayerRepository = {
  createPlayer: async (
    teamId: number,
    playerName: string,
    playerPosition: string,
    age: number
  ) => {
    try {
      const createPlayer = await Players.create({
        teamId,
        playerName,
        playerPosition,
        age,
      })
      return createPlayer
    } catch (error: any) {
      console.log(error.message)
    }
  },

  getOnePlayer: async (id: number) => {
    try {
      const getPlayer = await Players.findOne({
        where: { id },
      })
      return getPlayer
    } catch (error: any) {
      console.log(error.stack)
    }
  },

  getPlayerById: async (id: number) => {
    try {
      const playerId = await Players.findByPk(id)
      return playerId
    } catch (error) {
      console.log('Player Id can not be found')
    }
  },

  getAllPlayers: async () => {
    try {
      const allPlayers = await Players.findAll()
      return allPlayers
    } catch (error: any) {
      console.log(error.stack)
    }
  },

  setCaptain: async (playerId: number) => {
    try {
      const playerCaptain = await Players.update(
        {
          isCaptain: true,
        },
        { where: { id: playerId } }
      )
      return playerCaptain
    } catch (error: any) {
      console.log(error.message)
    }
  },

  updatePlayer: async (id: number, updateDetails: any) => {
    try {
      const player = await Players.findByPk(id)
      if (!player) return 'Player does not exist'
      await player.update(updateDetails)
      return player
    } catch (error: any) {
      console.log(error.stack)
    }
  },

  getPlayerWithTeam: async () => {
    try {
      const playerWithTeam = await Players.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: [
          {
            model: Team,
            attributes: ['teamName'],
          },
        ],
      })
      return playerWithTeam
    } catch (error: any) {
      console.log(error.stack)
    }
  },

  deletePlayer: async (id: number) => {
    try {
      const player = await Players.findByPk(id)
      if (!player) return 'Player does not exist'
      await player.destroy()
    } catch (error: any) {
      console.log(error.stack)
    }
  },
}

export default PlayerRepository
