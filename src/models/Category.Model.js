import mongoose from 'mongoose'
const { Schema } = mongoose

const categorySchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'product',
			},
		],
		subcategories: [
			{
				type: Schema.Types.ObjectId,
				ref: 'subcategory',
			},
		],
	},
	{ timestamps: true, strict: true }
)

const CategoryModel = mongoose.model('category', categorySchema)
export default CategoryModel
