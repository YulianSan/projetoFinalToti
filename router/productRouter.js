import express from "express"
import { createProduct } from "../controller/product/createProduct.js"
import { getProducts } from "../controller/product/getProducts.js";
import { getProduct } from "../controller/product/getProduct.js";
import { validate } from "../helpers/validate.js";
import { z as zod } from "zod";
import { checkToken } from "../middleware/checkToken.js";

const productRouter = express.Router()

const validateCreateProduct = zod.object({
    name: zod.string().min(1),
    price: zod.number().gt(0),
})

productRouter.get('/', checkToken, getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', validate({ body: validateCreateProduct }), createProduct);

export { productRouter }
