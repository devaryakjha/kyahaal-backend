import { Test, TestingModule } from '@nestjs/testing';
import { KyahaalConfigController } from './kyahaal-config.controller';
import { KyahaalConfigService } from './kyahaal-config.service';

describe('KyahaalConfigController', () => {
  let kyahaalConfigController: KyahaalConfigController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KyahaalConfigController],
      providers: [KyahaalConfigService],
    }).compile();

    kyahaalConfigController = app.get<KyahaalConfigController>(KyahaalConfigController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kyahaalConfigController.getHello()).toBe('Hello World!');
    });
  });
});
