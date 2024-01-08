import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://qgskholi:ZHnzxLfW3KglP05tiKWMKSJ2JXAdiKcV@prawn.rmq.cloudamqp.com/qgskholi'],
      queue: 'admin-backend'
    }
  });

  await app.listen(); // TODO
  logger.log('Microservice is listening');
  // await app.listen();
}
bootstrap();
