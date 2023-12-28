import { Test, TestingModule } from '@nestjs/testing';
import { Dir1Controller } from './dir1.controller';

describe('Dir1Controller', () => {
  let controller: Dir1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Dir1Controller],
    }).compile();

    controller = module.get<Dir1Controller>(Dir1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
