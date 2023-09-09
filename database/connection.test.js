import { expect, describe, it } from "vitest";
import { sequelize } from "./connection.js";

describe('Database', () => {
    it('Should connection in database', async () => {
        try { 
            await sequelize.authenticate() 
            expect(true).toBeTruthy()
        }catch (e) {
            expect(false).toBeTruthy()
        }finally{
            await sequelize.close()
        }
    })
})
