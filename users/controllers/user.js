const {Router} = require('express');
const express = require('express')

const router = express.Router()
const user = require('../model/user')

router.get('/', (req, res) => {
    res.json({
        status:200,
        data: user
    })
})

router.get('/:id', (req, res) => {
    res.json({
        status:200,
        data: user[req.params.id]
    })
})

router.post('/', (req, res) => {
    console.log('POST - req.body', req.body)
    user.push(req.body)
    res.json({        
        status: 200,
        route: "YOURE HITTING ME IN THE POST ROUTE",
        data: req.body
    })
})

router.delete('/:id', (req, res) => {
    user.splice(req.params.id, 1);

    res.json({
        status:200,
        route: "EJECTO DATA'O CUZ"
    })
})

router.put('/:id', (req, res) =>{
    console.log('PUT - req.params', req.params)
    console.log("PUT - req.body", req.body)
    user[req.params.id] = req.body
    res.json({
        status:200,
        route: "YOURE HITTING THE PUT ROUTE"
    })
})

module.exports = router
