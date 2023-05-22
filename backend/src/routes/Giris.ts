import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../../app-data-source';
import { Kullanicilar } from '../entity/Kullanicilar';
import { DurumMesajlari } from '../interfaces';
import { tokenOlustur } from '../utils';

const router = express.Router();

router.get("/", async (req: Request, res:Response) => {
    const kullanicilar = await appDataSource.getRepository(Kullanicilar).find();
    res.json(kullanicilar);
})

router.post('/', async (req: Request, res:Response) => {
    if (req.body.kullaniciAdi || req.body.sifre) {
        try {
          const kullanici = await appDataSource.getRepository(Kullanicilar).findOneBy({ kullaniciAdi: req.body.kullaniciAdi });
          
          if (!kullanici) {
            return res.json({
              mesaj: 'Kullanıcı bulunamadı!',
              status: 'warn'
            } as DurumMesajlari);
          }
          
          if (kullanici.sifre !== req.body.sifre) {
            return res.json({
              mesaj: 'Yanlış şifre!',
              status: 'warn'
            } as DurumMesajlari);
          }
          
          const token = tokenOlustur(kullanici.id);
          delete kullanici.sifre;
          return res.json({
            token,
            user: kullanici,
            message: 'loginSuccessfully'
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            mesaj: 'Bir hata oluştu!',
            status: 'error'
          } as DurumMesajlari);
        }
      } else {
        return res.json({
          mesaj: 'Lütfen kullanıcı adı ve şifrenizi kontrol ediniz!',
          status: 'warn'
        } as DurumMesajlari);
      }

})

export default router;
