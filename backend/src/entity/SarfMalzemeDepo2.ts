import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { SarfMalzemeDepo1 } from "./SarfMalzemeDepo1";
@Entity()
export class SarfMalzemeDepo2{
    @PrimaryGeneratedColumn()
    id: number
    
    @OneToOne(() => SarfMalzemeDepo1)
    @JoinColumn()
    ref_no : string
    
    @Column()
    kalem_islem: string
    
    @Column()
    malzeme_kodu: string
    
    @Column()
    malzeme_adi: string
    
    @Column()
    miktar: number
    
    @Column()
    not1: string
    
    @Column()
    not2: string
    
    @Column()
    birim: string
    
    @Column()
    cikilan_birim: string
    
    @Column()
    teslim_alan: string
    
    @Column()
    takip_no: string
}