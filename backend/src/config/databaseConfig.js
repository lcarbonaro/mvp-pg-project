  import {connect,set} from "mongoose";
  import mongoose from "mongoose";
  import {UserModel} from "../models/userModel.js";
  import MenuModel from "../models/menuModel.js";
  import { featuredProducts } from "../data.js";
  import { sampleUsers } from "../data.js";
  import bcrypt from 'bcryptjs';

 
 //hash database
const PASSWORD_HASH_SALT_ROUNDS = 10;

//use models strictly
mongoose.set('strictQuery', true);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        
        });
        await seedUsers();
        await seedMenu();
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};

async function seedUsers() {
    const userCount = await UserModel.countDocuments();
    if(userCount > 0) { 
        console.log('Users seed is done');
        return;
    }

    for (let user of sampleUsers) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('Users seed is done');
}

async function seedMenu() {
    const foods = await MenuModel.countDocuments();
    if(foods > 0) {
        console.log('Menu seed is done');
        return;
    }

    for (let food of featuredProducts) {
        food.img = `/images/${food.img}`;
        await MenuModel.create(food);
    }

    console.log('Menu seed is done');
}
  