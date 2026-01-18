import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController], //We contect this module with the controllers necesaries to work
  providers: [UsersService],
  exports: [UsersService], // can be imported by others modules
  imports: [forwardRef(() => AuthModule)], //With circular dependencies
})
export class UsersModule {}
