const asyncHandler = require('express-async-handler');

const Drink = require('../models/drinkModel')
// @desc Get Drinks
//@route  GET /api/drinks
//@access Private

const getDrinks = async (req,res) => {
    const drinks = await Drink.find()
    res.status(200).json(drinks)

}

// @desc Create a Drink
//@route  Post /api/drinks
//@access Private

const createDrink = asyncHandler(async (req,res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a drink name')
    }

    const drink = await Drink.create({

        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        tags: req.body.tags,
        allergens: req.body.allergens,
        image: req.body.image,
        
        
    })

    
    res.status(200).json(drink);

}); 

// @desc Update Drink
//@route  PUT /api/drinks/:id
//@access Private

const updateDrink = asyncHandler(async (req,res) => {

    const drink = await Drink.findById(req.params.id)

    if(!drink) {
        res.status(400)
        throw new Error("Drink not found")
    }

    const updatedDrink = await Drink.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedDrink);

})

// @desc Delete Drink
//@route  DELETE /api/drinks/:id
//@access Private

const deleteDrink = asyncHandler(async (req,res) => {
    const drink = await Drink.findById(req.params.id)

    if(!drink) {
        res.status(400)
        throw new Error("Drink not found")
    }

    await drink.remove()
    res.status(200).json({id: req.params.id});

})



module.exports = {
    getDrinks, 
    createDrink, 
    updateDrink, 
    deleteDrink
}