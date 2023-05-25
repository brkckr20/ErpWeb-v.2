import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class FirmaKarti{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ nullable: true })
    firma_kodu : string    
    
    @Column({ nullable: true })
    firma_unvan1 : string    
    
    @Column({ nullable: true })
    adres1 : string    
    
    @Column({ nullable: true })
    adres2 : string    
    
    @Column({ nullable: true })
    ulke_adi : string    
    
    @Column({ nullable: true })
    ulke_kodu : string    
    
    @Column({ nullable: true })
    sehir : string    
    
    @Column({ nullable: true })
    ilce : string    
    
    @Column({ nullable: true })
    posta_kodu : string    
    
    @Column({ nullable: true })
    vergi_dairesi : string    
    
    @Column({ nullable: true })
    vergi_no : string    
    
    @Column({ nullable: true })
    telefon : string     
    
    @Column({ nullable: true })
    cari_tipi : string 
    
    @Column({ nullable: true })
    gib_mail: string    
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}