const router = require('express').Router();
const { protect } = require('../../middleware/authMiddleware');

const {
    // getSingleUser,
    // getUsers,
    getMe,
    // createUser,
    deleteUser,
    updateUser,
    // loginRequired,
    signIn,
    register,
    // profile
} = require('../../controllers/userController');

const {
    getSends,
    getSingleSend,
    createSend,
    updateSend,
    deleteSend
} = require('../../controllers/sendController');

const {
    getProjects,
    getSingleProject,
    updateProject,
    deleteProject,
    createProject
} = require('../../controllers/projectController');

const {
    
} = require('../../controllers/climbingSessionController');

const {

} = require('../../controllers/trainingSessionController');

// User Routes
router.route('/register').post(register);

router.route('/signin').post(signIn);

router.route('/profile', protect, getMe);

router.route('/profile/:id').put(protect, updateUser)

router.route('/delete/:id').delete(protect, deleteUser)

// Sends Routes from user
router.route('/:id/send').get(protect, getSends).post(protect, createSend);

router.route('/send/:id').get(protect, getSingleSend).delete(protect, deleteSend).put(protect, updateSend)

// Project Routes from user
router.route('/:id/projects').get(protect, getProjects).post(protect, createProject);

router.route('/projects/:id').get(protect, getSingleProject).delete(protect, deleteProject).put(protect, updateProject)

// Climbing sessions from user

module.exports = router;
