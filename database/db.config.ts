import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
})

export const dbConn = async () => {
  try {
    await sequelizeConnection.authenticate()
    console.log('Connection has been established')
  } catch (error) {
    console.log('Connection error', error)
  }
}

export default sequelizeConnection
