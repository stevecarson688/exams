const express = require ("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection= require("./mongodb")




const  tempelatepath=path.join(__dirname,'../temeplates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatepath)
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=> {
    res.render("signin")
})



app.get("/signup",(req,res)=> {
    res.render("signup")
})


app.post("/signup", async (req,res)=> {
    const data = {
        name:req.body.lastname,
        name:req.body.firstname,
        password:req.body.password,
        email:req.body.email,
    }

    await collection.insertMany([data])
    res.render ("home")

})




app.post("/signin", async (req,res)=> {
    try {
        const check = await collection.findOne({firstname:req.body.firstname})

        if(check.password==req.body.password) {
            res.render("home")
        }
        else {
            res.send("wrong password")
        }
        

    }
    catch{
        res.send("wrong details")
    }
    


})






app.listen(3000, () => {
    console.log("port connected");
})






















