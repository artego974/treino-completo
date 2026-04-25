import { CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Guest } from "./Guest";


@Entity("checkin")
export class Checkin{
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn()
    created:Date

    @ManyToOne(()=> User, (user)=> user.checkin)
    user:User

    @OneToOne(()=> Guest, (guest)=> guest.checkin)
    guest:Guest
}