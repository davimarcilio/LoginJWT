const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlenght: 3, maxlenght: 50 },
    email: { type: String, required: true, minlenght: 6, maxlenght: 100 },
    password: { type: String, required: true, minlenght: 6, maxlenght: 200 },
    created_date: { type: Date, required: true, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);