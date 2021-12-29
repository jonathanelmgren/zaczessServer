import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = Schema(
	{
		title: String,
		category: {
			type: Schema.Types.ObjectId,
			ref: 'category',
            required: true
		},
		subcategory: {
			type: Schema.Types.ObjectId,
			ref: 'subcategory',
		},
		tags: [
			{
				type: String,
				lowercase: true,
			},
		],
		price: Number,
		salePrice: Number,
		amountOfTimesOrdered: Number,
		variations: [
			{
				size: String,
				color: String,
				seat: String,
				stock: Number,
			},
		],
		featuredImage: String,
		additionalImages: [String],
		description: String,
	},
	{ timestamps: true }
)

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel
