// Import required packages
import express, { json, urlencoded } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON and form data
app.use(json());
app.use(urlencoded({ extended: true }));

// Import routes
import apiRoutes from './routes/apiRoutes.js';

// Use routes in your app
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`);
});
