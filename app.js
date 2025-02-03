// app.js
const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(tourRouter); // Use the tour routes

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
