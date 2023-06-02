import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { SarfMalzemeDepo1 } from '../entity/SarfMalzemeDepo1';
import { SarfMalzemeDepo2 } from '../entity/SarfMalzemeDepo2';
import { DurumMesajlari } from '../interfaces';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body); 
    const fis = await appDataSource.getRepository(SarfMalzemeDepo1).create(req.body);
    const result = await appDataSource.getRepository(SarfMalzemeDepo1).save(fis);
    //return;
    //const havuz = await appDataSource.getRepository(SarfMalzemeDepo2).create(req.body);
    res.send({
        status: "success",
        mesaj : "Kayıt işlemi başarılı"
    } as DurumMesajlari);
})

export default router;
