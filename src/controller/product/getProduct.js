import { Product } from "../../model/Product.js"
import { Store } from "../../model/Store.js"

export const getProduct = async (req, res, next) => {
    const { id } = req.params

    const product = await Product.findByPk(id, {
        include: [{ model: Store, attributes: ['name', 'id'] }]
    })

    if( !product ) return next({ code: 404, message: 'Product not found'})

    return res.json({ success: true, data: product })
}
