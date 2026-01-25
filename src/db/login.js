import pool from "./index.js";
import bcrypt from "bcrypt";

const DEFAULT_ADMIN_PASS = "admin"; // Do not use this password in production.

function generateSalt() {
    return Math.floor(Math.random() * 900 + 100).toString();
}

async function hashPasswordWithSalt(password, salt) {
    const saltedPassword = password + salt;
    return await bcrypt.hash(saltedPassword, 10);
}

async function createLoginTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS logins (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            password_salt VARCHAR(255),
            is_admin BOOLEAN DEFAULT FALSE
        )
    `;
    await pool.execute(createTableQuery);

    const adminSalt = generateSalt();
    const adminHash = await hashPasswordWithSalt(DEFAULT_ADMIN_PASS, adminSalt);

    const defaultAdminQuery = `
        INSERT IGNORE INTO logins (username, password_hash, password_salt, is_admin)
        VALUES ('admin', ?, ?, TRUE)
    `;
    await pool.execute(defaultAdminQuery, [adminHash, adminSalt]);
}
