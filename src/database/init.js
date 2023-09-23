import { User } from "../model/User.js"
import { Store } from "../model/Store.js"
import { Product } from "../model/Product.js"

export const init = () => {
    Store.hasMany(Product)
    Product.belongsTo(Store)

    User.sync({alter: true})
    Product.sync({alter: true})
    Store.sync({alter: true})
}
