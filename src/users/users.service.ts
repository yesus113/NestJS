import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { Profile } from 'src/profile/entity/profile.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService, //Circular dependency
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  public async getAllUsers() {
    return await this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  public async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  public async createUser(userDto: CreateUserDto) {
    //create a Profile & save
    userDto.profile = userDto.profile ?? {};
    //Create a User object
    const user = this.userRepository.create(userDto);

    //Save the User object
    return await this.userRepository.save(user);
  }
}
