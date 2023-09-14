import { z as zod } from "zod"

export const validate = ( { body, params, query } ) => {
    return async (req, _, next) => {
        try{
            await zod.object({
                body,
                params,
                query
            }).parseAsync(req) 

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
