const { Router } = require('express');
const router = Router();

const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.findAll);
router.post('/', employeeController.create);

module.exports = router;