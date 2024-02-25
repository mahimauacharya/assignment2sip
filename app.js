// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Make sure db.js is in the same directory
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

app.use(bodyParser.json());

// Use the routers
app.use('/api', userRoutes);
app.use('/api', blogRoutes);
app.use('/api', searchRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
