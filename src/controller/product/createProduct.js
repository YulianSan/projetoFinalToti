import { Product } from "../../model/Product.js"

export const createProduct = async (req, res) => {
    let { name, price, discount, storeId, image } = req.body
    
    const product = await Product.create({
        name, price, discount, storeId, image
    })

    return res.status(201).json({ success: true, id: product.id })
}
