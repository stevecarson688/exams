const mongoose  = require ("mongoose")

mongoose.connect("mongodb://localhost:27017/loginSignUp")
.then(()=> {
    console.log("mongodb connecte");
})
.catch(()=> {
    console.log("failed to connect");
})

const SignInSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },

    password: {
        type: String,
        require:true,
    },

})

const collection = mongoose.model("Collection1", SignInSchema)

module.exports = collection















