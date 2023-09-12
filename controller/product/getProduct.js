import { sequelize } from "../../database/connection.js"
import { QueryTypes } from "sequelize"

export const getProduct = async (req, res, next) => {
    const { id } = req.params

    const product = await sequelize.query(`
        SELECT * FROM products where id = :id
    `, { 
            replacements: { id },
            type: QueryTypes.SELECT 
        }
    )

    if( !product[0] ) return next({ code: 404, message: 'Product not found'})

    return res.json({ success: true, data: product[0] })
}
