const { Router } = require('express');
const diaryController = require('../controllers/diary');


const router = Router();

router.get('/', diaryController.index);
router.get('/:date', diaryController.getByDate);
router.delete('/:id', diaryController.destroy);
router.post('/', diaryController.create);

module.exports = router;