import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { BirimKodlama } from '../entity/BirimKodlama';
import { DurumMesajlari } from '../interfaces';

const router = express.Router();

router.get("/", async (req: Request, res:Response) => {
    const birim = await appDataSource.getRepository(BirimKodlama).find();
    res.json(birim);
})

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body);
    const birim = await appDataSource.getRepository(BirimKodlama).create(req.body);
    const result = await appDataSource.getRepository(BirimKodlama).save(birim);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

router.put('/', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const birim = await appDataSource.createQueryBuilder().update(BirimKodlama).set({ ad: body.ad, kisa_kod: body.kisa_kod, depo: body.depo })
            .where("id = :id", { id: body.id }).execute();
        res.send({
            status: "success",
            mesaj: "Güncelleme işlemi başarılı",
        } as DurumMesajlari);
    } catch (error) {
        
    }
});


router.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    await appDataSource.createQueryBuilder().delete().from(BirimKodlama).where("id = :id", { id }).execute();
    res.send({
        status: "warn",
        mesaj: "Silme işlemi başarılı",
    } as DurumMesajlari);
})

export default router;
