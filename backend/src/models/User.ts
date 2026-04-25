import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Checkin } from "./Checkin";


@Entity("user")
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({})
    name: string

    @Column({})
    email: string

    @Column({})
    cpf: string

    @Column({})
    password: string

    @Column({})
    role: "admin" | "cerimonialista"
   
    @OneToMany(()=> Checkin, (checkin)=> checkin.user)
    checkin: Checkin[]

}