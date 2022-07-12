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


// Register or log a user in
// Get a user profile
router.route('/register').post(register);

router.route('/signin').post(signIn);

router.route('/profile', protect, getMe);

router.route('/profile', protect, getMe);

router.route('/profile/:id').put(updateUser)

module.exports = router;
