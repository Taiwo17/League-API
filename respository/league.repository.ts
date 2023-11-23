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
  getAllLeague: async () => {
    try {
      const getAllLeague = await League.findAll()
      return getAllLeague
    } catch (error: any) {
      console.log(error.stack)
    }
  },
  deleteLeague: async (id: number) => {
    try {
      const deleteLeague = await League.findByPk(id)
      if (!deleteLeague) return 'League does not exist'
      return deleteLeague.destroy()
    } catch (error: any) {
      console.log(error.stack)
    }
  },
}

export default LeagueRespository
