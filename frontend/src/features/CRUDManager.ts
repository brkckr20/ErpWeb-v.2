import axios from 'axios';
import { BASE_URL } from '../config';

export class CRUDManager<T> {

    depoAdi: string;

    constructor(depoAdi: string) {
        this.depoAdi = depoAdi;
    }
    
    async create(data :T) {
        const response = await axios.post(`${BASE_URL}/depo/${this.depoAdi}`, data);
        return response.data;
    }
}