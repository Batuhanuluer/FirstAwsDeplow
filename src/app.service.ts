import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world';
  }

  getPeliniSev():string{
    return 'Pelini cok seviyorum';
  }
}
