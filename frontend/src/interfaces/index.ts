export interface MalzemeInterface{
    id?: number;
    malzeme_kodu : string,
    malzeme_adi : string,
    depo_adi : string,
}

export interface KodlamaIsimleri{
    isim : 'malzemekodlama' | 'birimkodlama'
}

export interface BirimInterface{
    id?: number;
    ad : string,
    kisa_kod : string,
    depo : string,
}

export interface FirmaKartiInterface{
    id: number;
    firma_kodu: string;
    firma_unvan1: string;
    adres1: string;
    adres2: string;
    ulke_adi: string;
    ulke_kodu: string;
    sehir: string;
    ilce: string;
    posta_kodu: string;
    vergi_dairesi: string;
    vergi_no: string;
    telefon: string;
    cari_tipi: string;
    gib_mail: string;
}