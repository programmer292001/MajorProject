const expres = require('express')
const Model = require('../model/model');

const app = expres();

module.exports = app;


app.post('/post', async (req, res) => {
    console.log(req.body)
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
    })
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        console.log(error)
        res.status(400).json({message: error.message})
    }
})

//Get all Method
app.get('/getAll', async (req, res) => {
    try {
        const allRecords = await Model.find();
        console.log(allRecords)
        res.status(200).json({count: allRecords.length})
    }
    catch (error) {
        console.log(error)
        res.status(400).json({message: error.message})
    }
})
