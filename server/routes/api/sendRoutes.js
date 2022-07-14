const router = require('express').Router();
const { protect } = require('../../middleware/authMiddleware');
// /api/send

const {
    getSends,
    getSingleSend,
    createSend,
    updateSend,
    getSendDate,
    deleteSend
} = require('../../controllers/sendController');

// Sends Routes 
router.route('/send').get(protect, getSends).post(protect, createSend);
router.route('/send/date').get(protect, getSendDate);
router.route('/send/:id').get(protect, getSingleSend).delete(protect, deleteSend).put(protect, updateSend);


module.exports = router;