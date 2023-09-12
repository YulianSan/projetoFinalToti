import express from "express"
import dotenv from "dotenv"
import { router } from "./router/router.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next()
})

app.use(router)

export { app }
