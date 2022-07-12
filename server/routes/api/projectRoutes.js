const router = require('express').Router();
const { protect } = require('../../middleware/authMiddleware');

const {
    getProjects,
    getSingleProject,
    updateProject,
    deleteProject,
    createProject
} = require('../../controllers/projectController');

// /api/sends
router.route('/').get(protect, getProjects).post(protect, createProject);

// /api/sends
router.route('/:id').get(protect, getSingleProject).delete(protect, deleteProject).put(protect, updateProject)

module.exports = router;