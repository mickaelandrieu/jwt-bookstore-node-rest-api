const express = require('express');
const app = express()
const jwt = require('jsonwebtoken')
const e_jwt = require('express-jwt');

const SECRET = 'S3cr3tK3yD0ntSh4r31t'

app.use(express.json())

const users = [
    {
        "username": "john_doe",
        "password": "123456",
        "role": "USER"
    },
    {
        "username": "jane_doe",
        "password": "123456",
        "role": "ADMIN"
    }
]

app.use(e_jwt({ secret: SECRET, algorithms: ['HS256']}).unless({path: ['/login', '/']}));

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token, access /login with username and password in the Body to authenticate.');
    }
  }
);

app.post('/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
    }

    const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!user) {
        return res.status(400).json({ message: 'Error. Wrong login or password' })
    }

    const token = jwt.sign({
        username: user.username,
        role: user.role
    }, SECRET, { expiresIn: '3 hours' })

    return res.json({ access_token: token })
})

app.get('/', (req, res) => {
    res.json({'message': "Home, nothing interesting here."})
})

app.get('/protected', (req, res) => {
    res.json({'message': "You are allowed to access this protected part of the website."})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('[Minimal Sample Server] Started.')
})
