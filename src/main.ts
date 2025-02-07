import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import AppDataSource from '../ormconfig';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    await AppDataSource.initialize();
    logger.log('✅ Database connection established');
  } catch (error) {
    logger.error('❌ Database connection failed', error);
    process.exit(1); // Exit the process if DB connection fails
  }

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  logger.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
}

// ✅ Properly handle unhandled promise rejections
bootstrap().catch((err) => {
  console.error('Fatal error during bootstrap:', err);
  process.exit(1);
});
