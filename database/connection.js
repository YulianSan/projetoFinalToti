import dotenv from "dotenv"
dotenv.config()

import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.FILE_SQLITE
});

export { sequelize }
