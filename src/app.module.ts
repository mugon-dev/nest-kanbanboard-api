import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:kanban123@192.168.0.117:27017/kanban',
      {
        connectionFactory: (connection) => {
          if (connection.readyState === 1) {
            Logger.log('DB connected');
          }
          connection.on('connected', () => {
            Logger.log('is connected');
          });
          connection.on('disconnected', () => {
            Logger.log('DB disconnected');
          });
          connection.on('error', (error) => {
            Logger.log('DB connection failed! for error: ', error);
          });
          return connection;
        },
      },
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
