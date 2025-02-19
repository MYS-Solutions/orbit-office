"use server";
import mongoose from 'mongoose';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const MONGODB_URI = process.env.MONGODB_URI as string;
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
  }

  const opts = { 
    bufferCommands: false,
  };
  await mongoose.connect(MONGODB_URI, opts);
}

export default connectDB;