import express from 'express'
import { z as zod } from 'zod'
import { validate } from '../helpers/validate.js'
import { login } from '../controller/user/login.js'
import { createUser } from '../controller/user/createUser.js'

const userRouter = express.Router()

const validateLogin = zod.object({
    email: zod.string().min(1),
    password: zod.string().min(1),
})

const validateCreateUser = zod.object({
    name: zod.string().min(1),
    email: zod.string().min(1),
    password: zod.string().min(1),
})

userRouter.post('/login', validate({ body: validateLogin }), login)
userRouter.post(
    '/user/create', 
    validate({ body: validateCreateUser }), 
    createUser
)

export { userRouter }
