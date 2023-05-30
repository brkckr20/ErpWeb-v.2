import { BASE_URL } from '../../config';
import axios from 'axios';
const baseRoute = "kartlar";


export class KartYonetimi{
    async kartKaydet(kartAdi: string, veri:any) {
        const response = await axios.post(`${BASE_URL}/${baseRoute}/${kartAdi}`, veri);
        return response.data;
    }

    async kartGetir(kartAdi: string) {
        const response = await axios.get(`${BASE_URL}/${baseRoute}/${kartAdi}`);
        return response.data;
    }

    async idyeGoreKartGetir(kartAdi: string ,id : string | number | any) {
        const response = await axios.get(`${BASE_URL}/${baseRoute}/${kartAdi}/${id}`);
        return response.data;
    }

    async kartGuncelle(kartAdi: string, veri:any) {
        const response = await axios.put(`${BASE_URL}/${baseRoute}/${kartAdi}`,veri);
        return response.data;
    }

    async kartSil(kartAdi: string, id: any) {
        const response = await axios.delete(`${BASE_URL}/${baseRoute}/${kartAdi}/${id}`);
        return response.data;
    }
}