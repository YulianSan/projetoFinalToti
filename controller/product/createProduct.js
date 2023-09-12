import { sequelize } from "../../database/connection.js"
import { QueryTypes } from "sequelize"

export const createProduct = async (req, res) => {
    let { name, price, discount, store_id, image } = req.body
    
    await sequelize.query(`
        INSERT INTO products (name, price, discount, image, store_id) 
            VALUES(:name, :price, :discount, :image, :store_id)`, 
        { 
            replacements: { name, price, discount, image, store_id },
            type: QueryTypes.INSERT
        })

    return res.status(201).json({ success: true })
}
