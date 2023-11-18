import LeagueRespository from '../respository/league.repository'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

const LeagueController = {
  createLeague: async (req: Request, res: Response) => {
    try {
      const createLeague = await LeagueRespository.createLeague(req.body)
      return res.status(StatusCodes.OK).json({
        message: 'League created',
        data: createLeague,
      })
    } catch (error: any) {
      console.log(error.stack)
    }
  },
}

export default LeagueController
