import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}

    create(createCategoryDtos: [CreateCategoryDto]) {
        this.categoryRepository.save(createCategoryDtos);
    }

    findAll() {
        this.categoryRepository.find();
    }

    findOne(id: number) {
        this.categoryRepository.findBy({ id });
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        this.categoryRepository.update({ id }, updateCategoryDto);
    }

    remove(id: number) {
        this.categoryRepository.delete({ id });
    }
}
