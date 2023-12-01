import fs from 'fs'
import { Sequelize, DataTypes, Op, Dialect } from 'sequelize'
import path from 'path'

// Set the db to an object

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

let db = {} as any
const sequelize: any = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

db.Op = Op

// load models
fs.readdirSync(__dirname + '/../models/')
  .filter(function (file) {
    return file.indexOf('.') !== 0 && file !== 'index.js'
  })
  .forEach(async function (file) {
    const modelDef = require(path.join(__dirname + '/../models', file))
    const model = modelDef.default(sequelize, DataTypes) // Use DataTypes directly
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

//Sync Database
sequelize
  .sync()
  .then(async function () {
    console.log('DB CONNECTED ')
  })
  .catch(function (err: any) {
    console.log(err, 'Something went wrong with the Database Update!')
  })

// exports
db.Sequelize = Sequelize
db.sequelize = sequelize

export default db
