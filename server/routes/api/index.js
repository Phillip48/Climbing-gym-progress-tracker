const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sendRoutes = require('./sendRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/user', userRoutes);
router.use('/sends', sendRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
