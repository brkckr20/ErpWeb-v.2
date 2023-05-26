import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { FirmaKarti } from '../entity/FirmaKarti';
import { DurumMesajlari } from '../interfaces';

const router = express.Router();

router.get("/", async (req:Request,res:Response) => {
    const firmalar = await appDataSource.getRepository(FirmaKarti).find({
        select: ["id", "firma_kodu", "firma_unvan1", "adres1", "adres2", "ulke_adi", "ulke_kodu", "sehir", "ilce", "vergi_no"]
    });
    res.json(firmalar);
})


router.post('/', async (req: Request, res: Response) => {
    const birim = await appDataSource.getRepository(FirmaKarti).create(req.body);
    const result = await appDataSource.getRepository(FirmaKarti).save(birim);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

export default router;
