'use strict';

const { Router } = require('express');

const router = Router();
router.use('/users', require('./user.router'));

module.exports = router;
