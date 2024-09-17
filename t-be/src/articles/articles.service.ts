import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { Maybe, MaybeAsync } from 'purify-ts';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}

    find(options?: FindManyOptions<Article>) {
        return MaybeAsync.fromPromise(() =>
            this.articleRepository.find(options).then(Maybe.fromNullable)
        );
    }

    findAll(
        order: { name?: 'ASC' | 'DESC'; priceAmount?: 'ASC' | 'DESC' } = {
            name: 'ASC',
        }
    ) {
        return this.find({ order });
    }

    create(createArticleDto: CreateArticleDto) {
        return this.articleRepository.save(createArticleDto);
    }

    findOne(id: number): MaybeAsync<Article> {
        return MaybeAsync.fromPromise(() =>
            this.articleRepository.findOneBy({ id }).then(Maybe.fromNullable)
        );
    }

    update(id: number, updateArticleDto: UpdateArticleDto) {
        return this.articleRepository.update({ id }, updateArticleDto);
    }

    remove(id: number) {
        return this.articleRepository.delete({ id });
    }
}
