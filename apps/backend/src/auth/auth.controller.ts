import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterInstituteDto,
  RegisterSeafarerDto,
  RefreshTokenDto,
} from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/seafarer')
  @ApiOperation({ summary: 'Register a new Seafarer account' })
  @ApiResponse({ status: 201, description: 'Seafarer registered successfully' })
  registerSeafarer(@Body() dto: RegisterSeafarerDto) {
    return this.authService.registerSeafarer(dto);
  }

  @Post('register/institute')
  @ApiOperation({ summary: 'Register a new Training Institute and Admin account' })
  @ApiResponse({ status: 201, description: 'Institute registration submitted for approval' })
  registerInstitute(@Body() dto: RegisterInstituteDto) {
    return this.authService.registerInstitute(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in with email and password' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtain new access token using refresh token' })
  refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user profile' })
  getProfile(@CurrentUser() user: any) {
    return {
      message: 'Profile retrieved',
      user,
    };
  }
}
