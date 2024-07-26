import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export const menuSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: [Number], required: true }, // Allow array of numbers
}, 


{ 
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});

const MenuModel = model('menu', menuSchema);

export default MenuModel;
