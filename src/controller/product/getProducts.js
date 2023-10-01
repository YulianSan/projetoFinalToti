import { Product } from "../../model/Product.js"

export const getProducts = async (req, res) => {
    const products = await Product.findAll()

    const productsChunk = products.reduce((acc, product, index) => {
        let currentChunk = Math.floor(index / 15)
        acc[currentChunk] = [...(acc?.[currentChunk] ?? []), product]
        return acc;
    }, [])

    return res.json({ success: true, data: productsChunk })
}
