import TeamRepository from '../respository/team.repository'
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express'

const TeamController = {
  createTeam: async (req: Request, res: Response): Promise<Response> => {
    try {
      const createTeam = await TeamRepository.createTeam(req.body)
      return res.status(StatusCodes.CREATED).json({
        message: createTeam,
      })
    } catch (error: any) {
      console.log(error.message)
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error occured',
      })
    }
  },
}

export default TeamController
