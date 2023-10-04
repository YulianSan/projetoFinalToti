import { Product } from "../../model/Product.js"

export const deleteProduct = async (req, res, next) => {
    let { id } = req.params

    const product = await Product.destroy({ where: { id } })

    if (product <= 0) {
        return next({ code: 404, message: 'Product not found' })
    }

    return res.status(200).json({ success: true, product })
}
