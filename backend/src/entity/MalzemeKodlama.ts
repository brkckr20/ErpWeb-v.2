import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class MalzemeKodlama{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    malzeme_kodu : string
    
    @Column()
    malzeme_adi : string
    
    @Column()
    depo_adi : string
}