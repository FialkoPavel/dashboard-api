import express from 'express';
import { routerUser } from './users/users.js';

const port = 8000;
// const host = '127.0.0.1';
const app = express();

app.all('/hello', (req, res, next) => {
    console.log('ALL');
    next();
})

// const cb = (req, res, next) => {
//     console.log('CB');
//     next();
// };

app.get('/hello', (req, res) => {
        throw new Error('Error!!!!');
        // res.status(201).json({
        //     success: true
        // });
        // res.download('/test.pdf', 'tesssst.pdf');
        // res.redirect(301, 'https://test.com');
        // res.set('Content-type', 'text/plain1');
        // res.cookie('token', 'dsfs', {
        //     domain: '',
        //     path: '/',
        //     secure: true,
        //     expires: 1234565432
        // });

        // res.clearCookie('token');
        res.append('Pavel', 'has 10 000 000$');
        res.type('application/json');
        res.send({
            success: 'You are millionare!'
        })
        res.end();
    });

    app.use((err, req, res, next) => {
        // console.log('midleware app ' + err.message);
        res.status(401).send(`Here some error ${err.message}`)
        next();
    })

    app.use('/users', routerUser);

app.listen(port, () => {
    console.log(`Server launched on port: ${port}`);
});