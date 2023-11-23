import { Sequelize, DataTypes, Dialect } from 'sequelize'
import Team from './teams.model'
import Players from './player.model'
import User from './user.model'
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
  logging: false,
})

const League = sequelize.define(
  'league',
  {
    leagueName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boardOfDirectors: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)
// Defining the association

League.hasMany(Team, {
  foreignKey: 'leagueId',
})

Team.belongsTo(League)

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('League has been sync')
    return Team.sync({ alter: true })
  })
  .then(() => {
    console.log('Team has been sync')
    return Players.sync({ alter: true })
  })
  .then(() => {
    console.log('Players has been sync')
    return User.sync({ alter: true })
  })
  .then(() => {
    console.log('User has been sync')
  })
  .catch((error) => console.log(error.stack))

export default League
