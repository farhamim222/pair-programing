// controllers/tourControllers.js
const tours = require('../models/tourModel');

// Get all tours
const getTours = (req, res) => {
  res.status(200).json(tours);
};

// Create a new tour
const createTour = (req, res) => {
  const newTour = req.body;
  tours.push(newTour);
  res.status(201).json(newTour); // Return 201 status for created resource
};

// Delete a tour
const deleteTour = (req, res) => {
  const { id } = req.params;
  const index = tours.findIndex(tour => tour.id == id);
  if (index !== -1) {
    tours.splice(index, 1);
    res.status(204).send(); // 204 No Content for successful delete
  } else {
    res.status(404).json({ message: 'Tour not found' });
  }
};

module.exports = {
  getTours,
  createTour,
  deleteTour,
};
