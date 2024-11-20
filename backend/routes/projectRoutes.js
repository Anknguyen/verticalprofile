// projectsRoutes
const express = require('express');
const router = express.Router();
const db = require('./db');

// GET endpoint to fetch websites
router.get('/api/web', (req, res) => {
    console.log('GET /api/web');
    const query = 'SELECT * FROM projectsTable WHERE LOWER(type) = "web"';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.status(200).json(results);
        console.log(results);
    });
});

// GET endpoint to fetch apps
router.get('/api/app', (req, res) => {
    console.log('GET /api/app');
    const query = 'SELECT * FROM projectsTable WHERE LOWER(type) = "app"';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.status(200).json(results);
        console.log(results);
    });
});

module.exports = router;