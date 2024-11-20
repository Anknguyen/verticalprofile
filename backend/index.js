const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const db = require('./routes/db'); // Import the database connection

const app = express();
const port = 3001; // Use a different port than your React app

// Middleware
app.use(bodyParser.json());
app.use(cors());

module.exports = db; // Export the database connection

app.use(contactRoutes);
app.use(projectRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});