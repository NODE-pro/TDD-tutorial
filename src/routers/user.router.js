'use strict';

const { Router } = require('express');

const {
  EmailValidation,
  PasswordValidation,
} = require('../middlewares/user.validation');

const { UserSignin } = require('../controller/user.controller');

const router = Router();
router.post('/signin', EmailValidation, PasswordValidation, UserSignin);

module.exports = router;
