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
}