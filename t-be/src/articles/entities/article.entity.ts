import { Category } from '../../categories/entities/category.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    priceAmount: string;
    @Column()
    priceCurrency: string;
    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}
