function middlewarestuff(){
return(req,res,next)=>{
console.log("hello from midddeware 1 ")
next()
}
}
module.exports = {
    middlewarestuff
}