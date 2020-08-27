import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {nullable: true})
  username: string;

  @Column("varchar", {unique: true})
  email: string;

  @Column("varchar")
  password: string;
 
  @CreateDateColumn({type: "timestamp", name: "created_at"})
  createdAt: Date;
  
  @CreateDateColumn({type: "timestamp", name: "updated_at"})
  updatedAt: Date;

}