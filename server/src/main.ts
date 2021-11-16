import { NestFactory } from '@nestjs/core';
// import { useStaticAssets } from '@nestjs/common'
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true} )
//   app.useStaticAssets(join(__dirname, '../uploads'), {
//     index: false,
//     prefix: '/public',
// });

  await app.listen(5000);
}
bootstrap();
