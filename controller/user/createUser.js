import { hash } from "bcrypt"
import { sequelize } from "../../database/connection.js"
import { QueryTypes } from "sequelize"

export const createUser = async (req, res) => {
    let { name, email, password } = req.body
    const passwordHashed = await hash(password, 10)

    await sequelize.query(`
        INSERT INTO users (name, email, password) 
            VALUES(:name, :email, :password)`, 
        { 
            replacements: { name, email, password: passwordHashed },
            type: QueryTypes.INSERT
        })

    return res.status(201).json({ success: true })
}
