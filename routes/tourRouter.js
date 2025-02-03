// routes/tourRouter.js
const express = require('express');
const router = express.Router();
const { getTours, createTour, deleteTour } = require('../controllers/tourControllers');

// Define the routes
router.get('/tours', getTours); // Get all tours
router.post('/tours', createTour); // Create a new tour
router.delete('/tours/:id', deleteTour); // Delete a tour by ID

module.exports = router;
