import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'

const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export { User }
