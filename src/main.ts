import { NestiaSwaggerComposer } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = await NestiaSwaggerComposer.document(app, {});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  SwaggerModule.setup('api', app, document as any);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
