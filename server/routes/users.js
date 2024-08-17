const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', id, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    const {firstName,lastName,age} = req.body;
    db.query('INSERT INTO users (firstName,lastName,age) VALUES (?,?,?)', [firstName,lastName,age], (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({message: 'User added', id: result.insertId});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {firstName,lastName,age} = req.body;
    db.query('UPDATE users SET firstName = ?, lastName = ?, age = ? WHERE id = ?', [firstName,lastName,age,id], (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({message: 'User updated', id: id});
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        if(result.affectedRows === 0) {
            res.status(404).json({message: 'User not found or already deleted', id: id});
            return;
        }
        else{
            res.json({message: 'User deleted', id: id});
        }
    });
});

module.exports = router;