const express = require('express');
const router = express.Router();

const members = require('../../Members');

// Returns JSON when you postman the endpoint like: http://localhost:5000/api/members ...but notice that this only works when the server is RUNNING!
router.get('/', (req, res) => res.json(members));

// Get single member of /api/members
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Member ${req.params.id} not found`});
    }  
})

// Create member

module.exports = router;