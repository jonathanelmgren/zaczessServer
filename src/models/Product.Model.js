import mongoose from 'mongoose'
const {Schema} = mongoose

const productSchema = Schema({
    title: {
        type: String,
    },
    categories:[{
        type: String
    }],
    tags: [{
        type: String
    }],
    price: {
        type: Number
    },
    variation: {
        type: Boolean,
        sizes: [{
            type: String
        }],
        colors: {
            type: String
        },
        seat: {
            fullSeat: {
                type: Boolean
            },
            halfSeat:{
                type: Boolean
            }
        }
    },
    image: {
        type: String,
    }
}, {timestamps: true})

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel