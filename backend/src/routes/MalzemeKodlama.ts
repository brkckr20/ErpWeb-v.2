import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { MalzemeKodlama } from '../entity/MalzemeKodlama';
import { DurumMesajlari } from '../interfaces';

const router = express.Router();

router.get("/", async (req: Request, res:Response) => {
    const malzeme = await appDataSource.getRepository(MalzemeKodlama).find();
    res.json(malzeme);
})

router.post('/', async (req: Request, res: Response) => {
    const malzeme = await appDataSource.getRepository(MalzemeKodlama).create(req.body);
    const result = await appDataSource.getRepository(MalzemeKodlama).save(malzeme);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

router.put('/', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const malzeme = await appDataSource.createQueryBuilder().update(MalzemeKodlama).set({ malzeme_kodu: body.malzeme_kodu, malzeme_adi: body.malzeme_adi, depo_adi: body.depo_adi })
            .where("id = :id", { id: body.id }).execute();
            res.send({
                status: "success",
                mesaj: "Güncelleme işlemi başarılı",
            } as DurumMesajlari);
    } catch (error) {
        
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    await appDataSource.createQueryBuilder().delete().from(MalzemeKodlama).where("id = :id", { id }).execute();
    res.send({
        status: "warn",
        mesaj: "Silme işlemi başarılı",
    } as DurumMesajlari);
})

export default router;
