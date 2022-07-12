const router = require('express').Router();
const { protect } = require('../../middleware/authMiddleware');

const {
    getSends,
    getSingleSend,
    createSend,
    updateSend,
    deleteSend
} = require('../../controllers/sendController');

// /api/sends
router.route('/').get(protect, getSends).post(protect, createSend);

// /api/sends
router.route('/:id').get(protect, getSingleSend).delete(protect, deleteSend).put(protect, updateSend)


module.exports = router;