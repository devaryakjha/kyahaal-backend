import { Injectable } from '@nestjs/common';

@Injectable()
export class KyahaalConfigService {
  getHello(): string {
    return 'Hello World!';
  }
}
