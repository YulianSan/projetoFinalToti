import { Product } from "../../model/Product.js"

export const getProducts = async (req, res) => {
    const products = await Product.findAll() 
    return res.json({ success: true, data: products })
}
