import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from '../entities';
import { Employee } from '../entities/employee.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existing = await this.usersRepository.findOne({ where: { email: registerDto.email } });
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = this.usersRepository.create({
      ...registerDto,
      password: hashedPassword,
      role: registerDto.role || UserRole.AFFILIATE,
    });

    const savedUser = await this.usersRepository.save(user);
    const token = this.generateToken(savedUser);

    return {
      user: { id: savedUser.id, email: savedUser.email, name: savedUser.name, role: savedUser.role },
      access_token: token,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersRepository.findOne({ where: { email: loginDto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.generateToken(user);
    const result: any = {
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
      access_token: token,
    };

    // If employee role, attach employeeId
    if (user.role === UserRole.EMPLOYEE) {
      const employee = await this.employeesRepository.findOne({ where: { userId: user.id } });
      if (employee) {
        result.user.employeeId = employee.id;
      }
    }

    return result;
  }

  async getProfile(userId: number) {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException();
    }
    const profile: any = { id: user.id, email: user.email, name: user.name, role: user.role };

    if (user.role === UserRole.EMPLOYEE) {
      const employee = await this.employeesRepository.findOne({ where: { userId: user.id } });
      if (employee) {
        profile.employeeId = employee.id;
      }
    }

    return profile;
  }

  private generateToken(user: User) {
    return this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });
  }
}
