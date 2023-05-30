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

router.get("/:id", async (req: Request, res: Response) => {
    const firma = await appDataSource.getRepository(FirmaKarti).findOneBy({ id: Number(req.params.id) });
    if (firma) {
        const { created_at,updated_at, ...data } = firma;
        res.json(data);
    }
})

router.post('/', async (req: Request, res: Response) => {
    const birim = await appDataSource.getRepository(FirmaKarti).create(req.body);
    const result = await appDataSource.getRepository(FirmaKarti).save(birim);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

router.put('/', async (req: Request, res: Response) => {
    // const birim = await appDataSource.getRepository(FirmaKarti).create(req.body);
    // const result = await appDataSource.getRepository(FirmaKarti).save(birim);
    // res.send({
    //     status: "success",
    //     mesaj : "Kayıt işlemi başarılı"
    // } as DurumMesajlari);
})





export default router;
