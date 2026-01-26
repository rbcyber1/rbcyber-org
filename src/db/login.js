import path from "path";
import dotenv from "dotenv";

import pool from "./index.js";
import { generateFullHash } from "../util/password.js";

dotenv.config({ path: path.dirname("../config/.env") });

const DEFAULT_ADMIN_PASS =
    process.env.DEFAULT_ADMIN_PASS ? process.env.DEFAULT_ADMIN_PASS : "admin"; // Do not use this password in production.

export const createLoginTable = async () => {
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

    const { hash: adminHash, salt: adminSalt } =
        await generateFullHash(DEFAULT_ADMIN_PASS);

    const defaultAdminQuery = `
        INSERT IGNORE INTO logins (username, password_hash, password_salt, is_admin)
        VALUES ('admin', ?, ?, TRUE)
    `;
    await pool.execute(defaultAdminQuery, [adminHash, adminSalt]);
};

export const addUser = async (username, password, isAdmin = false) => {
    const { hash: passwordHash, salt } = await generateFullHash(password);

    const insertUserQuery = `
        INSERT INTO logins (username, password_hash, password_salt, is_admin)
        VALUES (?, ?, ?, ?)
    `;
    await pool.execute(insertUserQuery, [
        username,
        passwordHash,
        salt,
        isAdmin,
    ]);
};

export const findUserInfo = async (username) => {
    const findUserQuery = `
        SELECT * FROM logins WHERE username = ?
    `;
    const [rows] = await pool.execute(findUserQuery, [username]);
    return rows[0];
};
