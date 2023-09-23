import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'

const Product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
})

export { Product }
