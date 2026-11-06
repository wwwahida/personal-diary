const { Router } = require('express');
const diaryController = require('../controllers/diary');


const router = Router();

router.get('/', diaryController.index);
router.get('/:id', diaryController.show);
router.delete('/:id', diaryController.destroy);

module.exports = router;