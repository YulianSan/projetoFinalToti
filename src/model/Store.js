import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Product } from './Product.js'

const Store = sequelize.define('stores', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    indexes: [{ unique: true, fields: ['id'] }],
})

Store.hasMany(Product)
export { Store }
