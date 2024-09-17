import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}

    find(options?: FindManyOptions<Article>) {
        return this.articleRepository.find(options);
    }

    findAll(
        order: { name?: 'ASC' | 'DESC'; priceAmount?: 'ASC' | 'DESC' } = {
            name: 'ASC',
        }
    ) {
        return this.find({ order, relations: { categories: true } });
    }

    create(createArticleDto: CreateArticleDto) {
        return this.articleRepository.save(createArticleDto);
    }

    findOne(id: number) {
        this.articleRepository.findOne({
            where: { id },
            relations: { categories: true },
        });
    }

    update(id: number, updateArticleDto: UpdateArticleDto) {
        return this.articleRepository.update({ id }, updateArticleDto);
    }

    remove(id: number) {
        return this.articleRepository.delete({ id });
    }
}
