const express = require('express');
const projectsController = require('../../../controllers/projectsController');

const router = express.Router();

router.route('/')
    .get(projectsController.findAll);

module.exports = router;