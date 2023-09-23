import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Product } from './Product.js'

const Store = sequelize.define('stores', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

Store.hasMany(Product)
export { Store }
