// contactRoutes
const express = require('express');
const router = express.Router();
const db = require('./db');

// Function to insert data into the database
const insertIntoContactTable = (formData, callback) => {
    const { name, email, message } = formData;
    const query = 'INSERT INTO contactTable (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], callback);
};

// POST endpoint to handle form submission
router.post('/api/contact', (req, res) => {
    const formData = req.body;
    insertIntoContactTable(formData, (err, results) => {
        if (err) {
            console.error('Error inserting data into the database:', err);
            res.status(500).send('Error submitting form data');
            return;
        }
        res.status(200).send('Form data submitted successfully');
    });
});

module.exports = router;