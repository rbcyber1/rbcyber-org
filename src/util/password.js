import bcrypt from "bcrypt";

const generateSalt = () => {
    return Math.floor(Math.random() * 900 + 100).toString();
};

const generateFullHash = async (password) => {
    const salt = generateSalt();
    const saltedPassword = password + salt;
    const hash = await bcrypt.hash(saltedPassword, 10);
    return { hash, salt };
};

const comparePassToSaltedHash = async (password, salt, saltedHash) => {
    const saltedPassword = password + salt;
    return await bcrypt.compare(saltedPassword, saltedHash);
};

export { generateFullHash, comparePassToSaltedHash };
