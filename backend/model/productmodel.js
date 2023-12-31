import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {type:String, required:true, unique:true},
        slug: {type:String, required:true, unique:true},
        image: {type: String, required:true},
        brand: {type:String},
        description: {type:String, required:true},
        price: {type:String,required:true},
        rating: {type:Number, required:true},
        countInStock: {type:Number,required:true},
        numReviews: {type:Number, required:true},
        review:{type:String},

    },
    {
        timestamps:true,
    }

)

const Product = mongoose.model('Product',productSchema);
export default Product;