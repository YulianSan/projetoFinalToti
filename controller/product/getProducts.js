import { sequelize } from "../../database/connection.js"
import { QueryTypes } from "sequelize"

export const getProducts = async (req, res) => {
    const products = await sequelize.query(`SELECT * FROM products`, { 
        type: QueryTypes.SELECT 
    })

    return res.json({ success: true, data: products })
}
