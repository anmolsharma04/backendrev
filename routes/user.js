const express = require ('express')

//replaces app with router
//bcz in thihs file we are creating seprate routers only
const router = express.Router()
const{middlewarestuff} = require('../middlewares/user')
const {getuserbyid , updateuserbyid} = require('../controllers/user')

router.use(express.urlencoded({extended:false}))

router.use((req,res,next)=>{

})


//routes
router.get('/',(req,res)=>{
    return res.json(users);
})

//for dynamically searching user a/q to their id we can do
//:id for dynamic searching of user id
//const id is string so we equate it with number
//req.params used to access the parameters sent

router.get("/:id",(req,res)=>{
//under these request controllers are there so we shifted all these stuff in controllers
})


router.post('/',async(req,res)=>{
//in controllers
})

router.patch('/:id',(req,res)=>{
//in controllers
})


router.delete('/:id',(req,res)=>{
//in controllers
})
     
module.exports=router