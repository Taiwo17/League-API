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
  logging: false,
})

const User = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'superAdmin'],
      defaultValue: 'user',
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

/* sequelize
  .sync({ alter: true })
  .then(() => console.log('Team has been sync'))
  .catch((error) => console.log(error.message)) */

export default User
