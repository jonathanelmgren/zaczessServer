import mongoose from 'mongoose'
const { Schema } = mongoose

const subCategorySchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		parent: {
			type: Schema.Types.ObjectId,
			ref: 'category',
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: 'product',
			},
		],
	},
	{ timestamps: true, strict: true }
)

const SubCategoryModel = mongoose.model('subcategory', subCategorySchema)
export default SubCategoryModel
