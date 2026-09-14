export enum UserRole {
  SEAFARER = 'SEAFARER',
  INSTITUTE_ADMIN = 'INSTITUTE_ADMIN',
  INSTITUTE_STAFF = 'INSTITUTE_STAFF',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum InstituteVerificationStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED',
}

export enum CourseCategory {
  STCW_BASIC = 'STCW_BASIC',
  STCW_ADVANCED = 'STCW_ADVANCED',
  REFRESHER = 'REFRESHER',
  SIMULATOR = 'SIMULATOR',
  OFFSHORE = 'OFFSHORE',
  COMPETENCY = 'COMPETENCY',
  VALUE_ADDED = 'VALUE_ADDED',
}

export enum CourseApprovalStatus {
  DRAFT = 'DRAFT',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum BookingStatus {
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  CONFIRMED = 'CONFIRMED',
  CANCELLED_BY_CANDIDATE = 'CANCELLED_BY_CANDIDATE',
  CANCELLED_BY_INSTITUTE = 'CANCELLED_BY_INSTITUTE',
  COMPLETED = 'COMPLETED',
  REFUNDED = 'REFUNDED',
}

export enum PaymentGateway {
  RAZORPAY = 'RAZORPAY',
  STRIPE = 'STRIPE',
}

export enum PaymentStatus {
  INITIATED = 'INITIATED',
  CAPTURED = 'CAPTURED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
}

export enum DocumentType {
  PASSPORT = 'PASSPORT',
  CDC = 'CDC',
  INDOS = 'INDOS',
  MEDICAL_FITNESS = 'MEDICAL_FITNESS',
  STCW_CERTIFICATE = 'STCW_CERTIFICATE',
  COC = 'COC',
  ACADEMIC = 'ACADEMIC',
  OTHER = 'OTHER',
}

export enum DocumentVerificationStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
}

export enum JobType {
  SHIPBOARD = 'SHIPBOARD',
  SHORE_BASED = 'SHORE_BASED',
}

export enum JobApplicationStatus {
  APPLIED = 'APPLIED',
  SHORTLISTED = 'SHORTLISTED',
  INTERVIEW_SCHEDULED = 'INTERVIEW_SCHEDULED',
  SELECTED = 'SELECTED',
  REJECTED = 'REJECTED',
}

export interface UserProfile {
  id: string;
  email: string;
  phone?: string;
  role: UserRole;
  fullName: string;
  indosNumber?: string;
  cdcNumber?: string;
  rank?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InstituteProfile {
  id: string;
  name: string;
  dgShippingApprovalNumber: string;
  verificationStatus: InstituteVerificationStatus;
  contactEmail: string;
  contactPhone: string;
  city: string;
  state: string;
  country: string;
  address: string;
  logoUrl?: string;
  websiteUrl?: string;
  commissionPercentage: number;
}

export interface Course {
  id: string;
  instituteId: string;
  title: string;
  code: string;
  description: string;
  category: CourseCategory;
  durationDays: number;
  basePrice: number;
  currency: string;
  isDgApproved: boolean;
  approvalStatus: CourseApprovalStatus;
  prerequisites: string[];
}

export interface CourseBatch {
  id: string;
  courseId: string;
  startDate: string;
  endDate: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
  status: 'UPCOMING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
}

export interface Booking {
  id: string;
  bookingReference: string;
  seafarerId: string;
  batchId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: BookingStatus;
  paymentId?: string;
  studentInvoiceUrl?: string;
  instituteInvoiceUrl?: string;
  createdAt: string;
}
