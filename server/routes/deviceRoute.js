const Router = require('express');

const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = Router();

router.post('/', checkRole('ADMIN'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne); //Получить конкретное устройство

module.exports = router;