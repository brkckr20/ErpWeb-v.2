import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Kullanicilar{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    isim : string
    
    @Column()
    soyisim : string
    
    @Column()
    kullaniciAdi : string
    
    @Column()
    sifre : string
    
    @Column()
    unvan : string
    
    @Column("boolean", {default : false})
    admin : boolean
    
    @Column()
    email : string
}