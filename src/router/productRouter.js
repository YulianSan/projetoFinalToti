import express from "express"
import { createProduct } from "../controller/product/createProduct.js"
import { getProducts } from "../controller/product/getProducts.js";
import { getProduct } from "../controller/product/getProduct.js";
import { validate } from "../helpers/validate.js";
import { z as zod } from "zod";
import { checkToken } from "../middleware/checkToken.js";

const productRouter = express.Router()

const validateGetProduct = zod.object({
    id: zod.number().gte(1)
})

const validateCreateProduct = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(1),
    image: zod.string().min(1).url(),
    price: zod.number().gt(0),
    discount: zod.number().gte(0).lte(100),
})

productRouter.get(
    '/', 
    checkToken, 
    getProducts
)

productRouter.get(
    '/:id', 
    checkToken,
    validate({ params: validateGetProduct }),
    getProduct
)

productRouter.post(
    '/', 
    checkToken, 
    validate({ body: validateCreateProduct }),
    createProduct
);

export { productRouter }