import { Product } from "../../model/Product.js"

export const getProductStore = async (req, res, next) => {
    const { id } = req.params

    const product = await Product.findOne({
        where: { id, storeId: req.user.id },
    })

    if (!product) return next({ code: 404, message: 'Product not found' })

    return res.json({ success: true, data: product })
}
