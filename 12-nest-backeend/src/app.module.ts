import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';
import { log } from 'console';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI,{
      dbName:process.env.MOGO_DB_NAME
    }),
    AuthModule],
})
export class AppModule {

  constructor(){
  }

}
