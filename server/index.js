const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Stellar');

app.post('/login', (req, res) => {
      const { email, password } = req.body;
        UserModel.findOne({ email: email})
        .then(user => {
            if(!user) {
                res.json({ message: 'User not found' });
            } else {
                if(password === user.password) {
                    res.json({ message: 'User authenticated' });
                } else {
                    res.json({ message: 'Password incorrect' });
                }
            }
        })
});

app.post('/', (req, res) => {
     UserModel.create(req.body)
     .then(users => res.json(users))
     .catch(err => res.json(err));
});

app.listen(3000, () => {
  console.log('Server is running on port 3001');
});