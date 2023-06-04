const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../contants/constant');

const hashPassword = (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    comparePassword
}