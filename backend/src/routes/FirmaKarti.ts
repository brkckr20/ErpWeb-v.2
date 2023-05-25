import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { FirmaKarti } from '../entity/FirmaKarti';
import { DurumMesajlari } from '../interfaces';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body);
    const birim = await appDataSource.getRepository(FirmaKarti).create(req.body);
    const result = await appDataSource.getRepository(FirmaKarti).save(birim);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

export default router;
