const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isLoggedIn = async(req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(400).json({ message: 'please login to continue' });
        }
        const payload = await jwt.verify(token, process.env.JWT_SECRET); 
        const { username } = payload;
        const user = await User.find({ username });
        req.user = user;
    }
    catch (err) {
        return res.status(401).json({ message: 'You are not authorised' });
    }
    return next();
}

module.exports = {
    isLoggedIn
}