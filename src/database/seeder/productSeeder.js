import { randomBytes } from 'crypto'
import { sequelize } from '../connection.js'
import { QueryTypes } from 'sequelize'

export async function productSeeder(store_id) {
    const image = 'https://www.thebeautysalon.ie/wp-content/uploads/2021/04/imageskincare-brand-main-1.jpg'
    const price = Math.floor(Math.random() * 100000) / 100

    await sequelize.query(`
        INSERT INTO products(name, price, discount, image, store_id) VALUES(:name, :price, :discount, :image, :store_id)
    `, {
            replacements: { 
                name: randomBytes(10).toString('hex'), 
                price,
                discount: Math.floor(Math.random() * price / 2) / 100,
                image,
                store_id,
            },
            type: QueryTypes.INSERT
        }
    )
}
