const express = require('express');
const router = express.Router();
const { baseURL } = require('../library/constant');
const users = require('./user/user');
const employees = require('./api/employees');
const testUsers = require('./api/testUsers');
const verifyJWT = require('../middleware/verifyJWT');

router.use(`${baseURL}/users`, users);
// router.use(`${baseURL}/employees`, employees);

router.use(verifyJWT);
// router.use('/testUsers', testUsers);

module.exports = router;
