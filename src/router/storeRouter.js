import express from 'express'
import { login } from '../controller/store/login.js'
import { z as zod } from 'zod'
import { validate } from '../helpers/validate.js'
import { createStore } from '../controller/store/createStore.js'
import { checkTokenStore } from '../middleware/checkTokenStore.js'
import { getProductStore } from '../controller/store/getProductStore.js'

const storeRouter = express.Router()

const validateLogin = zod.object({
    email: zod.string().min(1),
    password: zod.string().min(1),
})

const validateCreate = zod.object({
    name: zod.string().min(1),
    email: zod.string().min(1),
    password: zod.string().min(1),
})

const validateGetProduct = zod.object({
    id: zod.string().min(1),
})

storeRouter.post(
    '/login',
    validate({ body: validateLogin }),
    login
)

storeRouter.post(
    '/',
    validate({ body: validateCreate }),
    createStore
)

storeRouter.get(
    '/product/:id',
    checkTokenStore,
    validate({ params: validateGetProduct }),
    getProductStore
)

export { storeRouter }
