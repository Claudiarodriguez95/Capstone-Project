// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // This line is crucial for using environment variables

// Initialize Express app
const app = express();

// Apply middleware
app.use(cors()); // Use CORS to handle cross-origin requests
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple route to check server is running
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Set the port from environment variables or default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));