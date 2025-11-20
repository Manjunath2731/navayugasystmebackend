import mongoose from 'mongoose';
import { config } from './env';

const buildMongoUri = (): string => {

  // Otherwise, construct from individual components
  const { host, port, username, password, database } = config.mongo;
  
  // Build connection string: mongodb://username:password@host:port/database?authSource=admin
  return `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;
};

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = buildMongoUri();
    console.log('\x1b[36m%s\x1b[0m', `Mongo URI: ${mongoUri}`);
    console.log('\x1b[36m%s\x1b[0m', `Connecting to MongoDB at ${config.mongo.host}:${config.mongo.port}...`);
    await mongoose.connect(mongoUri);
    console.log('\x1b[32m%s\x1b[0m', '✓ Database connected successfully');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '✗ MongoDB connection error:', error);
    process.exit(1);
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log('\x1b[33m%s\x1b[0m', '⚠ Database disconnected');
};