import {model,Schema} from 'mongoose';

export const userSchema = new Schema({
    name : {   type: String, required: true },
    email: {   type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

},
{ 
    timestamps: true ,
toJSON: {
     virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});

export const UserModel = model('user', userSchema)