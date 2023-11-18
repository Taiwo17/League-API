import Team from '../models/teams.model'

const TeamRepository = {
  createTeam: async (
    leagueId: number,
    teamName: string,
    location: string,
    coach: string
  ) => {
    try {
      const createTeam = await Team.create({
        leagueId,
        teamName,
        location,
        coach,
      })
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
