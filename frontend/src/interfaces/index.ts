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
    id?: number;
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

export interface MalzemeGirisFis{
    id: number | null;
    islem_cinsi: string;
    tarih: Date | any;
    firma_kodu: string;
    firma_unvan: string;
    fatura_no: string;
    kalem : MalzemeGirisKalem[]
}

export interface MalzemeGirisKalem{
    id: number | string | null;
    kalem_islem: string;
    malzeme_kodu: string;
    malzeme_adi: string;
    miktar: number | string;
    not1?: string;
    not2?: string;
    birim: string;
    cikilan_birim?: string;
    teslim_alan?: string;
    takip_no?: string;
    refNoId?: number;
    key?:number
}