const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sendRoutes = require('./sendRoutes');
const projectRoutes = require('./projectRoutes');
const climbingRoutes = require('./projectRoutes');
const trainingRoutes = require('./projectRoutes');

router.use('/user', userRoutes);
router.use('/send', sendRoutes);
router.use('/project', projectRoutes);
router.use('/training', trainingRoutes);
router.use('/climbing', climbingRoutes);

module.exports = router;
