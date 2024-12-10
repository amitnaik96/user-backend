import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({
        message : 'server is up!'
    })
});

app.post('/', async (req, res) => {
    try {
        const {email , password} = req.body;
        await prisma.user.create({
            data : {
                email,
                password
            }
        });
        res.json({
            message : 'user added successfully!'
        })
    } catch (err) {
        console.log(err);
        res.json({
            message : 'invalid inputs!'
        })
    }
})

app.listen(3000);