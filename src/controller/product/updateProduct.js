import { Product } from "../../model/Product.js"

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, price, discount, description, image } = req.body

    const product = await Product.update({
        name, price, discount, description, image
    }, {
        where: { id, storeId: req.user.id }
    })

    return res.status(200).json({ success: true, id: product.id })
}
