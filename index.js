require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const pageRouter = require('./routes/pageRouter');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to Mongoose server');
    }

});
// app.use('*', (req, res, next) => {
//     if (req.headers['x-forwarded-proto'] === 'https') {
//         next();
//     } else {
//         res.redirect('https://' + req.headers.host + req.originalUrl);
//     }
// })
app.use('/', express.json(), pageRouter);
app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})