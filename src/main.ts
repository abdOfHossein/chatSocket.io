import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port=3001;

  await app.listen(port,()=>{
    Logger.log(`servere is running on port:${port}`)
    
  });
}
bootstrap();
