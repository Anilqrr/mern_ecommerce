const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const user = require('../schema/user')
const Users = user.User

// console.log(Users)
router
 .get('/',async(req,res)=>{
      const users = await Users.find()
      res.send(users)
      console.log(users)
    // console.log('hell')
    // res.send('hello')
})
.get('/:id', async (req,res)=>{
  const id = req.params.id
  const users = await Users.findOne({_id:id})
      res.send(users)
      console.log(users)
})
.post('/createproduct',[
  body('product',"product length must 5 character").isLength({min:5}),
  body('price',"price minimum 2 length").isLength({min:2}),
],async (req, res)=>{
    const result = validationResult(req)

    if(!result.isEmpty()){
        return res.status(400).send(result)
    }
     
    const user = await Users.findOne({product:req.body.product})
    console.log(user)
    if(user){
         return res.status(400).send("product already exit!")
    }

      const users = await Users(req.body)
      users.save().catch((err)=>console.log(err))
      console.log(users)
      res.send(users)

})

.put('/updateproduct/:id',
body('product',"product length must 5 character").isLength({min:5}),
  body('price',"price minimum 2 length").isLength({min:2}),async(req, res)=>{
    
    const result = validationResult(req)

    if(!result.isEmpty()){
        return res.status(401).send(result)
    }

    const id = req.params.id
     let user = await Users.findById({_id:id})
     if(!user)
     {
        return res.status(402).json({error:"product not exits!"})
     }
     const {product,price,image,description} = req.body
    //  const check = await Users.findOne(product)
    //  if(check){
    //   console.log({error:"product error!"})
    //   return res.status(404).json({error:"product already exits!"})
    //  }
    //  res.send(user)
    const users = await Users.findOneAndUpdate({_id:id}, {product:product,price:price,image:image,description:description},{new:true})
    res.send(users)

})

.delete('/deleteproduct/:id',async (req, res)=>{
  const id = req.params.id
  let user = await Users.findById({_id:id})
  if(!user)
  {
     return res.status(400).json({error:"product not exits!"})
  }
  // res.send(user)
  const users = await Users.findOneAndDelete({_id:id},{new:true})
  res.send(users)
})

exports.routers = router