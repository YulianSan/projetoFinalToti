import express from "express"
import { productRouter } from "./productRouter.js"
import { userRouter } from "./userRouter.js"

const router = express.Router()

router.use('/', userRouter)
router.use('/product', productRouter)

router.use((err, req, res, next) => {
    return res.status(err?.code ?? 400)
        .json({ 
            success: false, 
            message: err?.message ?? 'Error',
            details: err?.details ?? []
        })
})

export { router }
