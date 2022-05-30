const Router = require('express');

const typeRouter = require('./typeRoute');
const brandRouter = require('./brandRoute');
const userRouter = require('./userRoute');
const deviceRouter = require('./deviceRoute');

const router = new Router();

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);

module.exports = router;