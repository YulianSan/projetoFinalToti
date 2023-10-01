import express from "express"
import { router } from "./router/router.js"
import { init } from "./database/init.js"

init()
const app = express()

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next()
})

app.use(express.json())

app.use(router)

export { app }
