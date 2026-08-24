export enum UserRole {
  ADMIN = 'admin',
  AFFILIATE = 'affiliate',
  EMPLOYEE = 'employee',
}

export enum EmployeePosition {
  HOST_LIVE = 'HOST_LIVE',
  OPERATOR = 'OPERATOR',
  ADMIN_STUDIO = 'ADMIN_STUDIO',
  TALENT_VIDEO = 'TALENT_VIDEO',
  MANAGER = 'MANAGER',
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PROBATION = 'PROBATION',
  RESIGNED = 'RESIGNED',
}

export enum EmploymentType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  FREELANCE = 'FREELANCE',
}

export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  LATE = 'LATE',
  ABSENT = 'ABSENT',
  SICK = 'SICK',
  LEAVE = 'LEAVE',
  OFF = 'OFF',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

export enum TrafficSource {
  LIVE = 'LIVE',
  VIDEO = 'VIDEO',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  DIRECT = 'DIRECT',
}

export interface User {
  id: string | number;
  email: string;
  name: string;
  role: UserRole;
  employeeId?: string | number;
  avatarUrl?: string;
}

export interface Category {
  id: string | number;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface Product {
  id: string | number;
  name: string;
  price: number;
  commissionRate: number;
  categoryId?: string | number;
  category?: Category;
  description?: string;
  shopeeUrl?: string;
  imageUrl?: string;
  totalSold?: number;
  totalRevenue?: number;
  commissionEarned?: number;
}

export interface Transaction {
  id: string | number;
  productId?: string | number;
  product?: Product;
  userId?: string | number;
  user?: User;
  quantity: number;
  totalPrice: number;
  commission: number;
  gmv: number;
  status: TransactionStatus;
  trafficSource: TrafficSource;
  transactionDate: string;
  isManual?: boolean;
  notes?: string;
  liveSessionId?: string | number;
  videoId?: string;
  socialPlatform?: string;
  clicks?: number;
  views?: number;
  conversionRate?: number;
}

export interface Employee {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  position: EmployeePosition | string;
  employmentType: EmploymentType | string;
  status: EmployeeStatus | string;
  baseSalary: number;
  hourlyRate: number;
  commissionRate: number;
  joinedDate: string;
  avatarUrl?: string;
  studios?: Studio[];
  assignedStudioName?: string;
  activeLiveSession?: LiveSession;
  totalLiveHoursThisMonth?: number;
  totalGmvThisMonth?: number;
  kpiScore?: number;
}

export interface Studio {
  id: string | number;
  name: string;
  code: string;
  roomNumber: string;
  status: 'ACTIVE' | 'IN_USE' | 'MAINTENANCE' | 'OFFLINE' | string;
  deviceInfo?: string;
  currentHostId?: string | number;
  currentHostName?: string;
  currentSessionId?: string | number;
  currentGmv?: number;
  currentViewers?: number;
  peakViewers?: number;
  streamStartTime?: string;
}

export interface LiveSession {
  id: string | number;
  title: string;
  studioId: string | number;
  studioName?: string;
  hostId: string | number;
  hostName?: string;
  startTime: string;
  endTime?: string;
  durationMinutes?: number;
  status: 'SCHEDULED' | 'LIVE' | 'ENDED' | string;
  viewersCount?: number;
  likesCount?: number;
  sharesCount?: number;
  ordersCount?: number;
  gmv?: number;
  commission?: number;
  featuredProducts?: Product[];
}

export interface Attendance {
  id: string | number;
  employeeId?: string | number;
  employeeName?: string;
  employee?: Employee;
  date: string;
  checkInTime?: string;
  checkOutTime?: string;
  checkInPhoto?: string;
  checkOutPhoto?: string;
  checkInLocation?: string;
  checkOutLocation?: string;
  status: AttendanceStatus | string;
  workHours?: number;
  notes?: string;
  isLate?: boolean;
  lateMinutes?: number;
}

export interface Schedule {
  id: string | number;
  employeeId?: string | number;
  employeeName?: string;
  employee?: Employee;
  studioId?: string | number;
  studioName?: string;
  studio?: Studio;
  shiftDate: string;
  shiftType: 'PAGI' | 'SIANG' | 'SORE' | 'MALAM' | 'DINI_HARI' | string;
  startTime: string;
  endTime: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'SWAPPED' | 'CANCELLED' | string;
  notes?: string;
}

export interface ScheduleSwapRequest {
  id: string | number;
  requesterId?: string | number;
  requesterName?: string;
  requesterHostName?: string;
  requester?: Employee;
  targetEmployeeId?: string | number;
  targetEmployeeName?: string;
  targetHostName?: string;
  targetHost?: Employee;
  targetDate?: string;
  requesterScheduleId?: string | number;
  targetScheduleId?: string | number;
  reason: string;
  status: 'PENDING' | 'PENDING_PEER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'CANCELLED' | string;
  createdAt?: string;
}

export interface LeaveRequest {
  id: string | number;
  employeeId?: string | number;
  employeeName?: string;
  employee?: Employee;
  leaveType?: 'ANNUAL' | 'SICK' | 'MATERNITY' | 'UNPAID' | 'EMERGENCY' | string;
  type?: 'ANNUAL' | 'SICK' | 'MATERNITY' | 'UNPAID' | 'EMERGENCY' | string;
  startDate: string;
  endDate: string;
  daysCount?: number;
  reason: string;
  attachmentUrl?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED' | string;
  reviewedBy?: string;
  reviewNotes?: string;
  createdAt?: string;
}

export interface Payroll {
  id: string | number;
  employeeId?: string | number;
  employeeName?: string;
  employeePosition?: EmployeePosition | string;
  employee?: Employee;
  periodMonth?: number;
  periodYear?: number;
  month?: number;
  year?: number;
  baseSalary?: number;
  liveHoursSalary?: number;
  commissionBonus?: number;
  performanceBonus?: number;
  allowance?: number;
  lateDeduction?: number;
  absenceDeduction?: number;
  taxDeduction?: number;
  bpjsDeduction?: number;
  netSalary?: number;
  status: 'DRAFT' | 'APPROVED' | 'PAID' | string;
  paymentDate?: string;
  liveHoursCount?: number;
  totalGmvGenerated?: number;
}

export interface TargetKpi {
  id: string | number;
  employeeId?: string | number;
  employeeName?: string;
  employee?: Employee;
  avatarUrl?: string;
  studioName?: string;
  month?: number;
  year?: number;
  gmvTarget?: number;
  targetGmv?: number;
  gmvAchieved?: number;
  achievedGmv?: number;
  liveHoursTarget?: number;
  liveHoursAchieved?: number;
  ordersTarget?: number;
  ordersAchieved?: number;
  kpiScore?: number;
  grade?: 'A' | 'B' | 'C' | 'D' | string;
}

export interface MonitoringSoldProduct {
  id: string | number;
  itemCode?: string;
  productId?: string;
  productName: string;
  shopName?: string;
  sellerName?: string;
  category?: string;
  ordersCount?: number;
  soldQuantity?: number;
  quantitySold?: number;
  totalGmv?: number;
  totalRevenue?: number;
  totalCommission?: number;
  commissionAmount?: number;
  effectiveCommissionRate?: number;
  commissionRate?: number;
  lastOrderDate?: string;
}

export interface MonitoringSellerRecap {
  id: string | number;
  sellerName: string;
  shopUrl?: string;
  rating?: number;
  totalProductsPromoted?: number;
  totalProducts?: number;
  totalOrders?: number;
  totalGmv?: number;
  totalRevenue?: number;
  totalCommission?: number;
  commissionAmount?: number;
  averageCommissionRate?: number;
  commissionRate?: number;
  status?: 'ACTIVE' | 'PAUSED' | 'TOP_TIER' | string;
}

export interface MonitoringCommissionAlert {
  id: string | number;
  type: 'RATE_DROP' | 'ZERO_COMMISSION' | 'UNEXPECTED_SPIKE' | 'SELLER_FLAGGED' | string;
  title: string;
  description: string;
  severity?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | string;
  productName?: string;
  shopName?: string;
  sellerName?: string;
  isRead: boolean;
  createdAt?: string;
}

export interface ShopeeCookie {
  id: string | number;
  accountType: 'CREATOR' | 'AFFILIATE' | 'SELLER' | string;
  accountName: string;
  shopeeId: string;
  cookiePreview: string;
  isValid: boolean;
  lastChecked?: string;
  expiresAt?: string;
  autoSync?: boolean;
}
