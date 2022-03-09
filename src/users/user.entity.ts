import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    // Popup hooks for Database activities

    @AfterInsert()
    logInsert(){
        console.log("inserted User with id", this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log("User updated", this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log("User removed", this.id)
    }
}