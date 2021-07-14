let express = require("express")
let router = express.Router();
const bodyParser = require("body-parser")
router.use(
    bodyParser.urlencoded({
        extended:true,
    })
)
router.use(express.json())
const knex= require('../data/db.js')

router.post("/namo",()=>{
    console.log("Hello Server!!") 
})

module.exports = router;