import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ArrayContains, FindManyOptions, Repository } from 'typeorm';

export type OrderOptions = {
    name?: 'ASC' | 'DESC';
    priceAmount?: 'ASC' | 'DESC';
};

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}

    find(options?: FindManyOptions<Article>) {
        return this.articleRepository.find({
            ...options,
            relations: { categories: true },
        });
    }

    findAll({
        order,
        categories,
        name,
    }: {
        order: OrderOptions;
        categories?: number[];
        name?: string;
    }) {
        return this.find({
            order,
            relations: { categories: true },
            where: {
                categories:
                    categories != null
                        ? { id: ArrayContains(categories) }
                        : null,
                name,
            },
        });
    }

    create(createArticleDtos: [CreateArticleDto]) {
        return this.articleRepository.save(createArticleDtos);
    }

    findOne(id: number) {
        return this.articleRepository.findOne({
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
