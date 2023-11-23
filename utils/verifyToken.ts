import { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

dotenv.config()

export interface AuthRequest extends Request {
  user?: {
    id: number
    email: string
    roles: any
  }
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Request the token from the headers
  const token = req.headers.authorization?.split(' ')[1]

  // Check if the token is provided or not
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'No token provided, please log in first',
    })
  }

  jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded) => {
    if (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid token, access denied',
      })
    }

    if (decoded) {
      req.user = decoded as { id: number; email: string; roles: any }
      // console.log(decoded) // Log decoded token payload for debugging
      next() // Proceed to the next middleware or route
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid token, access denied',
      })
    }
  })
}

export const adminCheck = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Request the token from the headers
  const token = req.headers.authorization?.split(' ')[1]

  // Check if the token is provided or not
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'No token provided, please log in first',
    })
  }

  jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded: any) => {
    if (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid token, access denied',
      })
    }

    if (decoded && decoded.roles === 'admin') {
      req.user = decoded as { id: number; email: string; roles: any }
      // console.log(decoded) // Log decoded token payload for debugging
      next() // Proceed to the next middleware or route
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Access denied, contact the super admin',
      })
    }
  })
}

export const superAdminCheck = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Request the token from the headers
  const token = req.headers.authorization?.split(' ')[1]

  // Check if the token is provided or not
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'No token provided, please log in first',
    })
  }

  jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded: any) => {
    if (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid token, access denied',
      })
    }

    if (decoded && decoded.roles === 'superAdmin') {
      req.user = decoded as { id: number; email: string; roles: any }
      // console.log(decoded) // Log decoded token payload for debugging
      next() // Proceed to the next middleware or route
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Access denied, contact the super admin',
      })
    }
  })
}
