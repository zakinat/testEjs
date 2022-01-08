const  mainPageRouter =require('express').Router()

mainPageRouter.get('/', async(req, res)=>{
    res.render('index')
})

module.exports= mainPageRouter

