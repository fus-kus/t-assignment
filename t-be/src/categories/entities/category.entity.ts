import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
}
