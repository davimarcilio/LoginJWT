require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to Mongoose server');
    }

});
app.use('/user', express.json(), userRouter);
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})