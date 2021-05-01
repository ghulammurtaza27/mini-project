const express = require('express');
const router = express.Router();


module.exports = ({
    getUsers,
    updatePassword,
    getUserById
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    

    router.put('/update', (req, res) => {
        const { password, id } = req.body;
        updatePassword(password, id)
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    

    
    router.get('/:id', (req, res) => {
        const { id } = req.params;
        getUserById(id)
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    return router;
};