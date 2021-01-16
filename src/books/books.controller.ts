import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {

  }
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
