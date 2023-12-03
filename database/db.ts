import fs from 'fs'
import { Sequelize, DataTypes, Op, Dialect } from 'sequelize'
import path from 'path'
import dotenv from 'dotenv'
import config from '../config/configSetup'


dotenv.config()
// Set the db to an object

const dbName = config.DBNAME
const dbUser = config.DBUSERNAME
// const dbHost = config.DBHOST
const dbPassword =config.DBPASSWORD


let db = {} as any
const sequelize: any = new Sequelize(dbName, dbUser, dbPassword, {
  host: config.DBHOST,
  dialect: 'mysql',
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
