import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { BookingsService } from './bookings.service';
import { LockSeatDto, VerifyPaymentDto } from './dto/booking.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Bookings & Payments')
@Controller('api/bookings')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('lock-seat')
  @Roles(UserRole.SEAFARER)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Lock seat quota for 10 minutes & generate draft booking with dual invoice' })
  lockSeat(@CurrentUser() user: any, @Body() dto: LockSeatDto) {
    return this.bookingsService.lockSeat(user.id, dto);
  }

  @Post('verify-payment')
  @Roles(UserRole.SEAFARER)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Verify payment gateway transaction & confirm booking with dual invoices' })
  verifyPayment(@CurrentUser() user: any, @Body() dto: VerifyPaymentDto) {
    return this.bookingsService.verifyAndConfirmPayment(user.id, dto);
  }

  @Get('my-bookings')
  @Roles(UserRole.SEAFARER)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Get all bookings for current seafarer' })
  getMyBookings(@CurrentUser() user: any) {
    return this.bookingsService.findMyBookings(user.id);
  }

  @Get('institute')
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.INSTITUTE_STAFF)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Get all candidate enrollments & escrow payouts for current institute' })
  getInstituteBookings(@CurrentUser() user: any) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.bookingsService.findInstituteBookings(user.instituteId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking details by ID including dual invoices' })
  getBookingById(@Param('id') id: string) {
    return this.bookingsService.findById(id);
  }
}