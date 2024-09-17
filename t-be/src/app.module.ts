import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { Article } from './articles/entities/article.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sql',
            entities: [Article, Category],
        }),
        ArticlesModule,
        CategoriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
