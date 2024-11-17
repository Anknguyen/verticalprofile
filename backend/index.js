const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001; // Use a different port than your React app

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Annguyen1!',
    database: 'profileDB'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Function to insert data into the database
const insertIntoContactTable = (formData, callback) => {
    const { name, email, message } = formData;
    const query = 'INSERT INTO contactTable (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], callback);
};

// POST endpoint to handle form submission
app.post('/api/contact', (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});