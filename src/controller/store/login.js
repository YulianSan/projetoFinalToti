import dotenv from 'dotenv'
dotenv.config()

import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Store } from '../../model/Store.js'

export const login = async (req, res, next) => {
    const { email, password } = req.body

    const user = await Store.findOne({ where: { email }}) 
    const passwordIsRight = await compare(password, user.password)

    if(!passwordIsRight){
        next({
            message: 'Access denied',
            code: 401,
        })
    }

    const token = jwt.sign({ 
        id: user.id, 
        email: user.email, 
        name: user.name 
    }, process.env.SECRET_KEY_STORE)

    return res.json({ token, success: true })
}
