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
