import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InstitutesModule } from './institutes/institutes.module';
import { CoursesModule } from './courses/courses.module';
import { BookingsModule } from './bookings/bookings.module';
import { CertificatesModule } from './certificates/certificates.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    InstitutesModule,
    CoursesModule,
    BookingsModule,
    CertificatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}