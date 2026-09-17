import { PrismaClient, UserRole, InstituteVerificationStatus } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial maritime database records...');

  const salt = await bcrypt.genSalt(10);
  const cadetPass = await bcrypt.hash('cadet123', salt);
  const instPass = await bcrypt.hash('inst123', salt);
  const adminPass = await bcrypt.hash('admin123', salt);

  // 1. Create or upsert MTI Karachi Institute
  const institute = await prisma.institute.upsert({
    where: { slug: 'mti-karachi' },
    update: {},
    create: {
      name: 'Maritime Training Institute (MTI Karachi)',
      slug: 'mti-karachi',
      dgShippingApprovalNumber: 'DG-MTI-KHI-01',
      verificationStatus: InstituteVerificationStatus.VERIFIED,
      contactEmail: 'admin@mti.edu.pk',
      contactPhone: '+923366668475',
      city: 'Karachi',
      state: 'Sindh',
      country: 'Pakistan',
      address: 'KPT Apprentice Yard, Keamari',
      websiteUrl: 'https://mti-karachi.edu.pk',
    },
  });

  // 2. Cadet User
  await prisma.user.upsert({
    where: { email: 'cadet@seafu.org' },
    update: {
      passwordHash: cadetPass,
    },
    create: {
      email: 'cadet@seafu.org',
      passwordHash: cadetPass,
      fullName: 'Cadet Officer Tariq Khan',
      role: UserRole.SEAFARER,
      phone: '+923366668475',
      indosNumber: '08ZL9431',
      cdcNumber: 'KHI-CD-2023-3891',
      rank: 'Pre-Sea Nautical Science Cadet',
      isEmailVerified: true,
      isActive: true,
    },
  });

  // 3. Institute Admin User
  await prisma.user.upsert({
    where: { email: 'admin@mti.edu.pk' },
    update: {
      passwordHash: instPass,
      instituteId: institute.id,
    },
    create: {
      email: 'admin@mti.edu.pk',
      passwordHash: instPass,
      fullName: 'Capt. M. H. Zaidi',
      role: UserRole.INSTITUTE_ADMIN,
      instituteId: institute.id,
      phone: '+923366668475',
      isEmailVerified: true,
      isActive: true,
    },
  });

  // 4. DG Platform Admin User
  await prisma.user.upsert({
    where: { email: 'admin@seafu.gov' },
    update: {
      passwordHash: adminPass,
    },
    create: {
      email: 'admin@seafu.gov',
      passwordHash: adminPass,
      fullName: 'DG Maritime Administrator',
      role: UserRole.SUPER_ADMIN,
      phone: '+923366668475',
      isEmailVerified: true,
      isActive: true,
    },
  });

  console.log('Seeding completed successfully:');
  console.log('- cadet@seafu.org / cadet123');
  console.log('- admin@mti.edu.pk / inst123');
  console.log('- admin@seafu.gov / admin123');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
