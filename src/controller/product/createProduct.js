import { Product } from "../../model/Product.js"

export const createProduct = async (req, res) => {
    let { name, price, discount, description, image } = req.body
    
    const product = await Product.create({
        name, price, discount, description, storeId: req.user.id, image
    })

    return res.status(201).json({ success: true, id: product.id })
}
