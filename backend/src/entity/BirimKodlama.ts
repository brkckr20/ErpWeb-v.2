import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class BirimKodlama{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    ad : string
    
    @Column()
    kisa_kod : string
    
    @Column()
    depo : string
}