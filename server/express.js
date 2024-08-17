const express = require('express');
const userRoute = require('./routes/users');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute);

app.listen(3000, () => {
    console.log('app started on port 3000')
});