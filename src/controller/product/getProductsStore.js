import { Product } from "../../model/Product.js"

export const getProductsStore = async (req, res) => {
    const { page = 1 } = req.query

    const products = await Product.findAndCountAll({
        where: { storeId: req.user.id },
        limit: 15,
        offset: (page - 1) * 15,
    })

    return res.json({ params: req.params, success: true, data: products })
}
