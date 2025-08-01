import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect ('mongodb+srv://hanhdinh:hanh27022003@cluster0.aq7xlzq.mongodb.net/food-onl').then(()=>console.log("DB Connected"));

}