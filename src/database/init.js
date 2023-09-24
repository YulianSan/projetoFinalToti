import { Store } from "../model/Store.js"
import { Product } from "../model/Product.js"

export const init = () => {
    Store.hasMany(Product)
    Product.belongsTo(Store)
}
