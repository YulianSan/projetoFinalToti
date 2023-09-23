import { sequelize } from "./connection.js"

try{
    await sequelize.query(`
        CREATE TABLE stores(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        );`)

    await sequelize.query(`
        CREATE TABLE users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        );`)

     await sequelize.query(`
        CREATE TABLE products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            price REAL,
            discount REAL,
            store_id INTEGER,
            image TEXT,
            FOREIGN KEY(store_id) REFERENCES stores(id) ON DELETE CASCADE
        );`)
}catch(e){
    console.log(e)
}
