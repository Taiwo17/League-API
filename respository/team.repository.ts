import { StatusCodes } from 'http-status-codes'
import Team from '../models/teams.model'

const TeamRepository = {
  createTeam: async (teamDetails: any) => {
    try {
      const createTeam = await Team.create(teamDetails)
      return createTeam
    } catch (error: any) {
      console.log(error.message)
    }
  },
  getTeamById: async (id: number) => {
    try {
      const teamId = await Team.findByPk(id)
      return teamId
    } catch (error) {
      console.log('Team Id can not be found')
    }
  },
}

export default TeamRepository
