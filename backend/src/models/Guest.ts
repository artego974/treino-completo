import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Checkin } from "./Checkin";


@Entity('guest')
export class Guest {
    @PrimaryGeneratedColumn()
    id:number

    @Column({})
    name: string

    @Column({})
    email: string

    @Column({})
    cpf: string

    @Column({})
    phone: string

    @Column({})
    table_number: number
    
    @OneToOne(()=> Checkin, (checkin)=> checkin.guest)
    checkin: Checkin

}