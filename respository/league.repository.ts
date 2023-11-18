import League from '../models/league.model'

const LeagueRespository = {
  createLeague: async (leagueDetails: any) => {
    try {
      const createLeague = await League.create(leagueDetails)
      return createLeague
    } catch (error: any) {
      console.log(error.stack)
    }
  },
  getLeagueById: async (id: number) => {
    try {
      const leaugeId = await League.findByPk(id)
      return leaugeId
    } catch (error: any) {
      console.log(error.stack)
    }
  },
}

export default LeagueRespository
