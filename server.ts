import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import { dbConn } from './database/db.config'
import cookieParser from 'cookie-parser'
import routes from './routes/index'
dotenv.config()

const server: Application = express()

// Database connection
dbConn()

// Passing express in-built middleware
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())

// Base url
server.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    msg: 'Welcome to league website',
  })
})

// Routes
server.use(routes)

server.listen(4000, () => console.log(`Server started on port ${4000}`))
