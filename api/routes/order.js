const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const order=require('../models/order');
const order = require('../../models/order');

router.get('/',(req,res,next)=>{
    order.find().exec().then(docs=>{
        res.status(200).json(docs)
    })
});
router.post('/',(req,res,next)=>{
    const oconst express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose');
    
    const Order = require('../models/order'); 
    router.get('/', (req, res, next) => {
        res.status(200).json({
            message: 'Orders were fetched'
        });
    });
    
    router.post('/', (req, res, next) => {
        const order = new Order({
            _id: mongoose.Types.ObjectId(),
            quantity: req.body.quantity,
            product: req.body.productid
        });
        
        order
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Order was created',
                    orderCreated: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    });
    
    router.get('/:orderId', (req, res, next) => {
        res.status(200).json({
            message: 'Order details',
            orderId: req.params.orderId
        });
    });
    
    router.delete('/:orderId', (req, res, next) => {
        res.status(200).json({
            message: 'Order deleted',
            orderId: req.params.orderId
        });
    });
    module.exports = router;
    order=new order({
        _id:mongoose.Types.ObjectId(),
        quantity:req.body.quantity,
        product:req.body.productid
    });
    order 
    .save()
    .then(result=>{
        console.log(result);
        res.status(201).json();
    });
    .catch(err=>{
        console.log(err);
        res.status(500).json()
    })
    res.status(201).json({
        message:'orders were post',
        ordercreated:order 
    });
});
router.get('/:orderid',(req,res,next)=>{
    res.status(200).json({
        message:'order details',
        orderid:req.params.orderid
    });
});
router.delete('/:orderid',(req,res,next)=>{
    res.status(200).json({
        message:'order details',
        orderid:req.params.orderid
    });
});

module.exports=router;