import dotenv from 'dotenv'
dotenv.config()

import { sequelize } from '../../database/connection.js'
import { QueryTypes } from 'sequelize'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res, next) => {
    const { email, password } = req.body

    const user = (await sequelize.query(`
        SELECT * FROM users 
            where email = :email
        `, { 
            type: QueryTypes.SELECT,
            replacements: { email }
        }
    ))[0]

    const passwordIsRight = await compare(password, user?.password ?? '')

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
    }, process.env.SECRET_KEY)

    return res.json({ token, success: true })
}
