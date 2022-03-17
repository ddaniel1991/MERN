const express = require('express');
const router = express.Router();
const { getDrinks, createDrink, updateDrink, deleteDrink } = require('../controllers/drinkController');


router.route("/").get(getDrinks).post(createDrink);

router.route("/:id").put(updateDrink).delete(deleteDrink)






module.exports = router