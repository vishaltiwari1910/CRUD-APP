const express = require('express')
const router = express.Router()
const alien = require('../models/alien')

router.get('/',async(req,res) => {
   try{
        const aliens = await alien.find()
        res.json(aliens)
   }
   catch(err){
    res.send('error' + err)
   }
})

router.get('/:id',async(req,res) => {
    try{
         const alien = await alien.findById(req.params.id)
         res.json(alien)
    }
    catch(err){
     res.send('error' + err)
    }
 })

router.post('/', async (req, res) => {
        const alien = new alien({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })
        try {
            const a1 = await alien.save()
            res.json(a1)
        }

        catch (err) {
            res.send('error')
        }
    })

    router.patch('/:id',async(req,res) => {
        try{
            const alien = await alien.findById(req.params.id)
            alien.sub = req.body.sub
            const a1 = await alien.save()
            res.json(a1)
        }
        catch(err){

            res.send('error')

        }
    })

module.exports = router