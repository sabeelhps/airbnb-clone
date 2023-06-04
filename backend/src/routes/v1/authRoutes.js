const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const BcryptUtils = require('../../utils/bcryptUtils');
const { isLoggedIn } = require('../../middleware/authMiddleware');
const logger = require('../../core/logger');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        logger.info("Entry in user register route");
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const isExistingUser = await User.findOne({ username });
    
        if (isExistingUser) {
            return res.status(400).json({ message: 'This username is already taken!' });
        }
    
        const hashedPassword = await BcryptUtils.hashPassword(password);
        const user = await User.create({ username, password: hashedPassword });

        const token = await jwt.sign({username: user.username}, process.env.JWT_SECRET);
        return res
            .json({
                message: 'registered successfully',
                token: token
            });
    }
    catch (err) {
        return res.status(500).json({ message:'something went wrong'});  
    }
});

router.get('/test',isLoggedIn, (req, res) => {
    res.send('Get all properties');
});

module.exports = router;
