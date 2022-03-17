const express = require('express');
const {protect} = require('../middleware/authMiddleware')
const router = express.Router();
const { getDishes, createDish, updateDish, deleteDish } = require('../controllers/dishController');


router.route("/").get(protect, getDishes).post(protect,createDish);

router.route("/:id").put(protect, updateDish).delete(protect, deleteDish)






module.exports = router