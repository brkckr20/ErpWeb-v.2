import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class SarfMalzemeDepo1{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ nullable: true })
    islem_cinsi : string
    
    @Column({ type: 'date', nullable:true })
    tarih: string;
    
    @Column({ nullable: true })
    firma_kodu : string
    
    @Column({ nullable: true })
    firma_unvan : string
    
    @Column({ nullable: true })
    fatura_no : string
}