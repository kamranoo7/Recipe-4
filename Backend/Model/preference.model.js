let mongoose=require("mongoose")
const prefSchema = new mongoose.Schema({
    model_name: String,
    year: Number,
    list_price: Number,
    colors: String,
    mileage: String,
    power: String,
    max_speed: String,
  });
   let prefModel=mongoose.model("saved",prefSchema)
   module.exports={
    prefModel
   }