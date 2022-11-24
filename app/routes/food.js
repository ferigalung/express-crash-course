const express = require('express');
const foodHandler = require('../modules/food/api_handler')
const router = express.Router();

router.route('/')
    .get(foodHandler.getFood)
    .post(foodHandler.postFood)

module.exports = router;