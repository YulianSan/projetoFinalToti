import { hash } from "bcrypt"
import { Store } from "../../model/Store.js"

export const createStore = async (req, res) => {
    let { name, email, password } = req.body
    const passwordHashed = await hash(password, 10)

    const store = await Store.create({
        name, email, password: passwordHashed
    })

    return res.status(201).json({ success: true, id: store.id })
}
