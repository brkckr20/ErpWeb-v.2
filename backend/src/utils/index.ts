import * as jwt from 'jsonwebtoken';

const secretKey = "nakosan"

export const tokenOlustur = (userId: number) => {
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token;
}