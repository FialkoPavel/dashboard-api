import express from "express";

const routerUser = express.Router();

routerUser.post('/login', (req, res) => {
    throw new Error('Login ERRROOOORRRRRR')
    res.send('login');
});

routerUser.post('/register', (req, res) => {
    res.send('register');
});

routerUser.use((err, req, res, next) => {
    res.send(`User login ${err.message}`)
    console.log('routerUser midlware');
    next();
});

export { routerUser };