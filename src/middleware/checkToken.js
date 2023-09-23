import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'
import { User } from '../model/User.js'

export const checkToken = async (req, res, next) => {
    const token = req.headers?.authorization?.replace('Bearer ', '');
   
    if(!token){
        return next({
            code: 401,
            message: 'No token provided.'
        })
    }

    let payload

    try { 
        payload = jwt.verify(token, process.env.SECRET_KEY)
    }
    catch(e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return next({
                code: 401,
                message: 'Invalid token'
            })
		}

        return next({
            code: 400,
            message: 'Error'
        })
    }

    req.user = await User.findOne({ where: { email: payload.email }})
    next()
}
