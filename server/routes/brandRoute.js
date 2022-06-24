const Router = require('express');

const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = Router();

router.post('/', checkRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;