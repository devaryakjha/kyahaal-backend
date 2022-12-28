import { Test, TestingModule } from '@nestjs/testing';
import { KyahaalAuthController } from './kyahaal-auth.controller';
import { KyahaalAuthService } from './kyahaal-auth.service';

describe('KyahaalAuthController', () => {
  let kyahaalAuthController: KyahaalAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KyahaalAuthController],
      providers: [KyahaalAuthService],
    }).compile();

    kyahaalAuthController = app.get<KyahaalAuthController>(
      KyahaalAuthController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kyahaalAuthController.getHello()).toBe('Hello World!');
    });
  });
});
