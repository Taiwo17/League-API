import * as dotenv from 'dotenv'
dotenv.config()

type Config = {
  NODE_ENV: string
  PORT: number
  //SSL: boolean;
  JWT_SECRET: string
  //JWT_EXPIRY_TIME: string;
  DBNAME: string
  DBUSERNAME: string
  DBPASSWORD: string
  DBHOST: string
  DBPORT: number
  DBDIALECT: string
}

const getConfig = (): Config => {
  return {
    NODE_ENV: process.env.NODE_ENV as string,
    PORT: Number(process.env.PORT),
    //SSL: true,
    JWT_SECRET: process.env.JWT_SECRET as string,
    // JWT_EXPIRY_TIME: process.env.JWT_EXPIRY_TIME,
    DBNAME: process.env.DBNAME as string,
    DBUSERNAME: process.env.DBUSERNAME as string,
    DBPASSWORD: process.env.DBPASSWORD as string,
    DBHOST: process.env.DBHOST as string,
    DBPORT: Number(process.env.DBPORT),
    DBDIALECT: process.env.DBDIALECT as any,
  }
}

const getSanitzedConfig = (config: Config) => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`)
    }
  }
  return config as Config
}

const config = getConfig()
const sanitizedConfig = getSanitzedConfig(config)

export default sanitizedConfig
