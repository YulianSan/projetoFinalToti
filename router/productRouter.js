import express from "express"
import { createProduct } from "../controller/product/createProduct.js"
import { getProducts } from "../controller/product/getProducts.js";
import { getProduct } from "../controller/product/getProduct.js";

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', createProduct);

export { productRouter }
