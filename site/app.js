import express from 'express';
import userService from './services/users/users.js'

const app = express();
const port = 4000;

app.get('/users', (req, res) => {
    const {getUsers} = userService()

    getUsers().then(result => {
        res.status(200).json(result.data);
    });
});

app.listen(port, () =>
    console.log(`Server running on port ${port}, http://localhost:${port}`)
);