import dotenv from 'dotenv'
dotenv.config()

export default {
  "development": {
    "storage": process.env.FILE_SQLITE,
    "dialect": "sqlite"
  },
  "test": {
    "storage": process.env.FILE_SQLITE,
    "dialect": "sqlite"
  },
  "production": {
    "storage": process.env.FILE_SQLITE,
    "dialect": "sqlite"
  }
}
