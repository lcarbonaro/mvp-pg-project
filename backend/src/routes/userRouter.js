import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();
import handler from 'express-async-handler';
import { UserModel } from '../models/userModel.js';
import bcrypt from 'bcryptjs';

    const PASSWORD_HASH_SALT_ROUNDS = 10;


    router.post('/login', handler(async (req, res) => {
        const { email, password } = req.body;
        // Check if user exists by email
        const user = await UserModel.findOne({ email });
        //1st password entered from user
        //2nd hashed password saved in database
        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
            return;
        } else {
            res.status(400).send('Invalid email or password');
        }

})
);

router.post(
    '/register', handler(async (req, res) => {
        //get info from request body
        const { name, email, password, address } = req.body;
        //check if user is already registered
        const user = await UserModel.findOne({ email });
        //send message if they exist
        if(user) { 
            res.status(400).send('User already exists');
            return;
        }
        const hashedPassword = await bcrypt.hash(password, PASSWORD_HASH_SALT_ROUNDS);

        const newUser = {
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            address
        }
        // create new user pass newUser object to model
        const result = await UserModel.create(newUser);
        res.send(generateTokenResponse(result));
    })
)

const generateTokenResponse = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        },
        'process.env.JWT_SECRET',
        { expiresIn: '30d' }
    );
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
};


export default router