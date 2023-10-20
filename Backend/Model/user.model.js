let mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    recipeId:Number,
            title: String,
            ingredients:Array,
            instruction: String,
            image: String,
            nutritional: String,
            UserID:String
})


let UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}