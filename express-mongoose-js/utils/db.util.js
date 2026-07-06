import mongoose from 'mongoose';

/**
 * Connect to MongoDB
 */
export async function connectMongo() {
  console.info('Connecting to MongoDB...');
  try {
    if (!process.env.MONGODB_CONNECTION_STRING) throw new Error('Missing MONGODB_CONNECTION_STRING in the environment');

    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      serverSelectionTimeoutMS: 15000,
    });

    console.info(`Database: Connected ${conn.connection.host}`);

    mongoose.set('debug', process.env.NODE_ENV === 'development');
    mongoose.set('strictQuery', true);
  } catch (e) {
    console.error(`Database: ${e.message}`);
    process.exit(1);
  }
}
