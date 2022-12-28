import { Injectable } from '@nestjs/common';

@Injectable()
export class KyahaalAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
