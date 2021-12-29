import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const isProd = process.env.PROD;

const connectToPort = async (application) => {
	try {
		await application.listen(process.env.PORT || 3001, () => {
			console.log(`✔️ Server igång på port ${process.env.PORT}`);
		});
	} catch (error) {
		console.error('❌ ERROR OCCURED WHILE TRYING TO CONNECT TO THE PORT..');
	}
};

const connectToDatabase = async () => {
	try {
		await mongoose.connect(isProd ? process.env.PROD_DATABASE_URL : process.env.DEV_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
		console.log(`✔️ SUCCESSFULLY CONNECTED TO DATABASE..`);
	} catch (error) {
		console.error('❌ ERROR OCCURD WHEN TRYING TO CONNECT TO DATABASE');
		process.exit();
	}
};

export default { connectToPort, connectToDatabase };
