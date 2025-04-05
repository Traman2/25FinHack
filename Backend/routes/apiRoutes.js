// Import controller
import { getHome, getData, submitData } from '../controllers/apiController.js';

// Define routes
import { Router } from 'express';
const router = Router();

// Basic GET route
router.get('/', getHome);

// API GET route
router.get('/data', getData);

// API POST route
router.post('/submit', submitData);

export default router;
