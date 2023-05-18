import axios from 'axios';
import { MalzemeInterface, KodlamaIsimleri } from '../../interfaces';
import { BASE_URL } from '../../config';
const baseRoute = "kodlama";

export class KodlamaYonetimi{

    async kodlamaKaydet(depoadi : KodlamaIsimleri, veri : MalzemeInterface) {
        const response = await axios.post(`${BASE_URL}/${baseRoute}/${depoadi.isim}`, veri)
        return response.data;
    }

    async kodlamaGetir(depoadi : KodlamaIsimleri) {
        const response = await axios.get(`${BASE_URL}/${baseRoute}/${depoadi.isim}`);
        return response.data;
    }

    async kodlamaGuncelle(depoadi : KodlamaIsimleri, veri : MalzemeInterface) {
        const response = await axios.put(`${BASE_URL}/${baseRoute}/${depoadi.isim}`, veri)
        return response.data;
    }

    async kodlamaSil(depoadi : KodlamaIsimleri,id : number | string | any) {
        const response = await axios.delete(`${BASE_URL}/${baseRoute}/${depoadi.isim}/${id}`);
        return response.data;
    }
}