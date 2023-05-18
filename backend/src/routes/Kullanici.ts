import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { Kullanicilar } from '../entity/Kullanicilar';

const router = express.Router();

router.get("/", async (req: Request, res:Response) => {
    const kullanicilar = await appDataSource.getRepository(Kullanicilar).find();
    res.json(kullanicilar);
})

router.post('/', async (req: Request, res:Response) => {
    const kullanici = await appDataSource.getRepository(Kullanicilar).create(req.body);
    const result = await appDataSource.getRepository(Kullanicilar).save(kullanici);
    res.send(result);
})

export default router;
