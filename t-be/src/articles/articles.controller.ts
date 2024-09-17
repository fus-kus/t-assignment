import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { ArticlesService, OrderOptions } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

interface SearchQuery {
    order?: OrderOptions;
    categories?: number[];
    name?: string;
}

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Post()
    create(@Body() articles: [CreateArticleDto]) {
        return this.articlesService.create(articles);
    }

    @Get()
    findAll(@Query() query: SearchQuery) {
        return this.articlesService.findAll({
            order: { name: 'ASC' },
            ...query,
        });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articlesService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateArticleDto: UpdateArticleDto
    ) {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.articlesService.remove(+id);
    }
}
