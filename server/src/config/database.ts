import mongoose from 'mongoose';
import { config } from './env';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongoUri);
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