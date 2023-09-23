import { z as zod } from "zod"

export const validate = ( { body, params, query } ) => {
    return async (req, _, next) => {
        const validator = {}
        if(body) { validator.body = body }
        if(params) { validator.params = params }
        if(query) { validator.query = query }
        try{
            await zod.object(validator).parseAsync(req) 

            return next()
        }
        catch(e) {
            return next({
                type: 'Invalid data',
                details: e,
            })
        }
    }
}
