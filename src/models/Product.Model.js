import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = Schema({
    title: String,
    categories: {
        horse: [String],
        rider: [String]
    },
    tags: [String],
    price: Number,
    salePrice: Number,
    amountOfTimesOrdered: Number,
    variations : [{
        size: String,
        color: String,
        seat: String,
        stock: Number
    }],
    featuredImage: String,
    additionalImages: [String],
}, { timestamps: true })

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel