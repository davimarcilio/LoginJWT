const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
router.get('/', auth, (req, res) => {
    if (req.user.admin) {
        res.send('view on Admin');
    } else {
        res.status(401).send('Access Denied');
    }
});
module.exports = router;