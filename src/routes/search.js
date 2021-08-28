const express = require('express');
const router = express.Router();

const searchController = require('../app/controller/SearchController');

router.use('/', searchController.search);

module.exports = router;
