import { hash } from 'bcrypt'
import { randomBytes } from 'crypto'
import { sequelize } from '../connection.js'
import { QueryTypes } from 'sequelize'
import { productSeeder } from './productSeeder.js'

export async function storeSeeder(options = null) {
    const [id, _] = await sequelize.query(`
        INSERT INTO stores(name, email, password) VALUES(:name, :email, :password)
    `, {
            replacements: { 
                name: randomBytes(10).toString('hex'), 
                email: randomBytes(5).toString('hex') + '@gmail.com',
                password: await hash('123', 10),
            },
            type: QueryTypes.INSERT
        }
    )

    if(options.with_products){
        productSeeder(id)
    }
}
