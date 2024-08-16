const User = require('../models/user')

async function getuserbyid(req,res){
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user)
}


async function updateuserbyid(req,res){
return res.json({status:"pending"})
}

async function postroutebyid(req,res){
const body = req.body //data available at req.body
if(
   !body ||
   !body.firstname ||
   !body.lastname ||
   !body.email ||
   !body.gender ||
   !body.jobtitle 
)

{
   return res.status(400).json({msg:"all fields are required..."})
}

const result =await User.create({
   firstname: body.firstname,
   lastname: body.lastname,
   email: body.email,
   gender: body.gender,
   jobtitle: body.jobtitle
})

console.log(result)
return res.status(201).json({msg:"success"})

}


async function deleteuserbyid(req,res){
    return res.json({status:"pending"})
}

module.exports={
    getuserbyid,
    updateuserbyid,
    postroutebyid,
    deleteuserbyid
}
