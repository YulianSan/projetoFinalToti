import { storeSeeder } from "./seeder/storeSeeder.js"

for(let i = 0; i < 5; i++){
    storeSeeder({
        with_products: true
    })
}
