import 'dotenv/config';
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;
const DB = process.env.DB;


export async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL, {dbName: DB});
    } catch (error) {
        console.log("Error in connecting database", error);
    }
}