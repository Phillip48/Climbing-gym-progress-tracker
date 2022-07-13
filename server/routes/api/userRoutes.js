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
    getClimbingSessions,
    getSingleClimbingSession,
    updateClimbingSession,
    deleteClimbingSession,
    createClimbingSession 
} = require('../../controllers/climbingSessionController');

const {
    getSingleTrainingSession,
    getTrainingSessions,
    updateTrainingSession,
    createTrainingSession,
    deleteTrainingSession
} = require('../../controllers/trainingSessionController');
//  ====================================================== //
// User Routes (all work)
router.route('/register').post(register);

router.route('/signin').post(signIn);

router.route('/profile', protect, getMe);

router.route('/profile/:userId').put(protect, updateUser);

router.route('/delete/:userId').delete(protect, deleteUser);
//  ====================================================== //
// Sends Routes from user (all work)
router.route('/send').get(protect, getSends);
router.route('/:userId/send').post(protect, createSend);

router.route('/:userId/send/:id').get(protect, getSingleSend).delete(protect, deleteSend).put(protect, updateSend);
//  ====================================================== //
// Project Routes from user (all work)
router.route('/project').get(protect, getProjects);

router.route('/:userId/project').post(protect, createProject);

router.route('/:userId/project/:id').get(protect, getSingleProject).delete(protect, deleteProject).put(protect, updateProject);
//  ====================================================== //
// Climbing sessions from user
router.route('/climbingsession').get(protect, getClimbingSessions);

router.route('/:userId/climbingsession').post(protect, createClimbingSession);

router.route('/:userId/climbingsession/:id').get(protect, getSingleClimbingSession).delete(protect, deleteClimbingSession).put(protect, updateClimbingSession);
//  ====================================================== //
// Training sessions from user
router.route('/trainingsession').get(protect, getTrainingSessions);

router.route('/:userId/trainingsession').post(protect, createTrainingSession);

router.route('/:userId/trainingsession/:id').get(protect, getSingleTrainingSession).delete(protect, deleteTrainingSession).put(protect, updateTrainingSession);
module.exports = router;
