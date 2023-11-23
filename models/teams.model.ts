import { Sequelize, DataTypes, Dialect } from 'sequelize'
import Players from './player.model'
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

const Team = sequelize.define(
  'team',
  {
    leagueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coach: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)
// Defining the association
// One-to-many relationship

Team.hasMany(Players, {
  foreignKey: 'teamId',
})

Players.belongsTo(Team)

export default Team
