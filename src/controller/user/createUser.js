import { hash } from "bcrypt"
import { User } from "../../model/User.js"

export const createUser = async (req, res) => {
    let { name, email, password } = req.body
    const passwordHashed = await hash(password, 10)

    await User.create({
        name,
        email,
        password: passwordHashed,
    });

    return res.status(201).json({ success: true })
}
