var express = require("express")
var router = express.Router()

router.get("/",(req,res)=>{
    res.send("Home")
})
module.exports = router;
