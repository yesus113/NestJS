import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';

@Module({
  controllers: [UsersController], //We contect this module with the controllers necesaries to work
  providers: [UsersService],
  exports: [UsersService], // can be imported by others modules
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])], //With circular dependencies
})
export class UsersModule {}
