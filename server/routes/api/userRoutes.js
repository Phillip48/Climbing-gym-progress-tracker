const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    // createUser,
    deleteUser,
    updateUser,
    loginRequired,
    signIn,
    register,
    profile
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


// /api/users
// router.route('/').get(getUsers).post(register);

// // /api/user/:userId
// router.route('/:userId').post(loginRequired, profile).delete(deleteUser);

router.route('/register').post(register);

router.route('/signin').post(signIn);


// // /api/users/:userId/sends
router.route('/:userId/sends').get(getSends).post(createSend);

// // /api/users/:userId/sends/:sendId
router.route('/:userId/sends/:sendId').get(getSingleSend).delete(deleteSend);

// // /api/users/:userId/projects
router.route('/:userId/projects').get(getProjects).post(createProject);

// // /api/users/:userId/sends/:projectId
router.route('/:userId/projects/:projectId').get(getSingleProject).delete(deleteProject);

module.exports = router;
