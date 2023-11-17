import { Sequelize, DataTypes, Dialect } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
})

const Players = sequelize.define(
  'players',
  {
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerPosition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

sequelize
  .sync()
  .then(() => console.log('Player has been sync'))
  .catch((error) => console.log(error.message))
export default Players
