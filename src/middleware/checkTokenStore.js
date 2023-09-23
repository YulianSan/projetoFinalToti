import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'
import { Store } from '../model/Store.js';

export const checkTokenStore = async (req, res, next) => {
    const token = req.headers?.authorization?.replace('Bearer ', '');
   
    if(!token){
        return next({
            code: 401,
            message: 'No token provided.'
        })
    }

    let payload

    try { 
        payload = jwt.verify(token, process.env.SECRET_KEY_STORE)
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

    req.user = await Store.findOne({ where: { email: payload.email }})
    next()
}
