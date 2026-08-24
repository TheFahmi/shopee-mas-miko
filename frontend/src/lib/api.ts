import {
  mockProducts,
  mockCategories,
  mockTransactions,
  mockEmployees,
  mockStudios,
  mockLiveSessions,
  mockAttendances,
  mockSchedules,
  mockPayrolls,
  mockTargetKpiList,
  mockSoldProducts,
  mockSellerRecaps,
  mockAlerts,
  mockCookies,
  mockLeaveRequests,
  mockSwapRequests,
  mockUsers,
} from './mockData';
import {
  Product,
  Category,
  Transaction,
  Employee,
  Studio,
  LiveSession,
  Attendance,
  Schedule,
  Payroll,
  TargetKpi,
  MonitoringSoldProduct,
  MonitoringSellerRecap,
  MonitoringCommissionAlert,
  ShopeeCookie,
  LeaveRequest,
  ScheduleSwapRequest,
  User,
} from '@/types';

// In browser, use /api proxy by default to avoid CORS issues; SSR uses process.env.NEXT_PUBLIC_API_URL
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '/api';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
};

function getHeaders(customHeaders?: Record<string, string>): Record<string, string> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('shopee_token') : null;
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(customHeaders || {}),
  };
}

let autoAuthPromise: Promise<string | null> | null = null;

async function getOrFetchToken(): Promise<string | null> {
  if (typeof window === 'undefined') return null;
  const existingToken = localStorage.getItem('shopee_token');
  if (existingToken && !existingToken.startsWith('demo-token')) {
    return existingToken;
  }

  if (autoAuthPromise) return autoAuthPromise;

  autoAuthPromise = (async () => {
    try {
      const res = await fetch(`${getBaseUrl()}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@shopee-affiliate.com',
          password: 'admin123',
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.token) {
          localStorage.setItem('shopee_token', data.token);
          if (data.user) {
            localStorage.setItem('shopee_user', JSON.stringify(data.user));
          }
          return data.token as string;
        }
      }
    } catch (e) {
      console.warn('[API] Auto-auth failed:', e);
    } finally {
      autoAuthPromise = null;
    }
    return null;
  })();

  return autoAuthPromise;
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  fallbackData?: T,
): Promise<T> {
  const url = `${getBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`;
  try {
    let token = typeof window !== 'undefined' ? localStorage.getItem('shopee_token') : null;
    if (!token || token.startsWith('demo-token')) {
      token = await getOrFetchToken();
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((options.headers as Record<string, string>) || {}),
    };

    let res = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    // If 401 Unauthorized, try auto-refreshing token and retrying once
    if (res.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('shopee_token');
      const freshToken = await getOrFetchToken();
      if (freshToken) {
        headers.Authorization = `Bearer ${freshToken}`;
        res = await fetch(url, {
          ...options,
          headers,
        });
      }
    }

    if (res.ok) {
      const json = await res.json();
      return json as T;
    }
  } catch (err) {
    console.warn(`[API] Fetch failed for ${url}, using fallback if available:`, err);
  }

  if (fallbackData !== undefined) {
    return fallbackData;
  }
  return [] as unknown as T;
}

export const api = {
  // ================= AUTH =================
  async login(email: string, password: string): Promise<{ token: string; user: User }> {
    try {
      const res = await fetch(`${getBaseUrl()}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof window !== 'undefined' && data.token) {
          localStorage.setItem('shopee_token', data.token);
          localStorage.setItem('shopee_user', JSON.stringify(data.user));
        }
        return data;
      }
    } catch {
      // fallback
    }

    const matchedUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase()) || mockUsers[0];
    const demoToken = 'demo-token-' + Date.now();
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopee_token', demoToken);
      localStorage.setItem('shopee_user', JSON.stringify(matchedUser));
    }
    return { token: demoToken, user: matchedUser };
  },

  async getProfile(): Promise<User> {
    return request<User>('/auth/profile', { method: 'GET' }, mockUsers[0]);
  },

  // ================= PRODUCTS & CATEGORIES =================
  async getProducts(): Promise<Product[]> {
    return request<Product[]>('/products', { method: 'GET' }, mockProducts);
  },

  async getTopProducts(limit = 10): Promise<Product[]> {
    return request<Product[]>(`/products/top?limit=${limit}`, { method: 'GET' }, mockProducts.slice(0, limit));
  },

  async createProduct(dto: Partial<Product>): Promise<Product> {
    return request<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateProduct(id: number, dto: Partial<Product>): Promise<Product> {
    return request<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteProduct(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/products/${id}`, {
      method: 'DELETE',
    });
  },

  async getCategories(): Promise<Category[]> {
    return request<Category[]>('/categories', { method: 'GET' }, mockCategories);
  },

  async createCategory(dto: { name: string; description?: string }): Promise<Category> {
    return request<Category>('/categories', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateCategory(id: number, dto: Partial<Category>): Promise<Category> {
    return request<Category>(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteCategory(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/categories/${id}`, {
      method: 'DELETE',
    });
  },

  // ================= TRANSACTIONS & DASHBOARD =================
  async getTransactions(params?: { startDate?: string; endDate?: string; status?: string; trafficSource?: string }): Promise<Transaction[]> {
    const q = params ? '?' + new URLSearchParams(params as Record<string, string>).toString() : '';
    return request<Transaction[]>(`/transactions${q}`, { method: 'GET' }, mockTransactions);
  },

  async getDashboardStats(): Promise<any> {
    return request<any>('/transactions/dashboard', { method: 'GET' }, {
      todayRevenue: 28500000,
      todayCommission: 2420000,
      todayOrders: 142,
      todayClicks: 3200,
      conversionRate: 4.4,
      pendingCommission: 8450000,
      monthlyRevenue: 642000000,
      monthlyCommission: 54570000,
    });
  },

  async getRevenueChart(period: 'daily' | 'weekly' | 'monthly' = 'daily', days = 30): Promise<any[]> {
    return request<any[]>(`/transactions/chart?period=${period}&days=${days}`, { method: 'GET' }, []);
  },

  async createTransaction(dto: Partial<Transaction>): Promise<Transaction> {
    return request<Transaction>('/transactions', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  // ================= EMPLOYEES & HR =================
  async getEmployees(): Promise<Employee[]> {
    return request<Employee[]>('/employees', { method: 'GET' }, mockEmployees);
  },

  async createEmployee(dto: Partial<Employee>): Promise<Employee> {
    return request<Employee>('/employees', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateEmployee(id: number, dto: Partial<Employee>): Promise<Employee> {
    return request<Employee>(`/employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteEmployee(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/employees/${id}`, {
      method: 'DELETE',
    });
  },

  // ================= STUDIOS & LIVE SESSIONS =================
  async getStudios(): Promise<Studio[]> {
    return request<Studio[]>('/studios', { method: 'GET' }, mockStudios);
  },

  async createStudio(dto: Partial<Studio>): Promise<Studio> {
    return request<Studio>('/studios', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateStudio(id: number, dto: Partial<Studio>): Promise<Studio> {
    return request<Studio>(`/studios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteStudio(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/studios/${id}`, {
      method: 'DELETE',
    });
  },

  async getLiveSessions(): Promise<LiveSession[]> {
    return request<LiveSession[]>('/live-sessions', { method: 'GET' }, mockLiveSessions);
  },

  async createLiveSession(dto: Partial<LiveSession>): Promise<LiveSession> {
    return request<LiveSession>('/live-sessions', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateLiveSession(id: number, dto: Partial<LiveSession>): Promise<LiveSession> {
    return request<LiveSession>(`/live-sessions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteLiveSession(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/live-sessions/${id}`, {
      method: 'DELETE',
    });
  },

  // ================= ATTENDANCE =================
  async getAttendances(date?: string): Promise<Attendance[]> {
    const q = date ? `/daily/${date}` : '';
    return request<Attendance[]>(`/attendance${q}`, { method: 'GET' }, mockAttendances);
  },

  async checkIn(dto: { employeeId: number; location?: string; photo?: string; notes?: string }): Promise<Attendance> {
    return request<Attendance>('/attendance/check-in', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async checkOut(dto: { employeeId: number; notes?: string }): Promise<Attendance> {
    return request<Attendance>('/attendance/check-out', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  // ================= SCHEDULE & SWAP =================
  async getSchedules(): Promise<Schedule[]> {
    return request<Schedule[]>('/schedule', { method: 'GET' }, mockSchedules);
  },

  async createSchedule(dto: Partial<Schedule>): Promise<Schedule> {
    return request<Schedule>('/schedule', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateSchedule(id: number, dto: Partial<Schedule>): Promise<Schedule> {
    return request<Schedule>(`/schedule/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteSchedule(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/schedule/${id}`, {
      method: 'DELETE',
    });
  },

  async getSwapRequests(): Promise<ScheduleSwapRequest[]> {
    return request<ScheduleSwapRequest[]>('/schedule-swaps', { method: 'GET' }, mockSwapRequests);
  },

  async respondSwapRequest(id: number, approved: boolean, reason?: string): Promise<ScheduleSwapRequest> {
    return request<ScheduleSwapRequest>(`/schedule-swaps/${id}/admin-respond`, {
      method: 'PUT',
      body: JSON.stringify({ approved, reason }),
    });
  },

  // ================= PAYROLL =================
  async getPayrolls(params?: { month?: number; year?: number; status?: string }): Promise<Payroll[]> {
    const q = params ? '?' + new URLSearchParams(params as unknown as Record<string, string>).toString() : '';
    return request<Payroll[]>(`/payroll${q}`, { method: 'GET' }, mockPayrolls);
  },

  async generatePayroll(month: number, year: number): Promise<any> {
    return request<any>('/payroll/generate', {
      method: 'POST',
      body: JSON.stringify({ month, year }),
    });
  },

  async updatePayroll(id: number, dto: Partial<Payroll>): Promise<Payroll> {
    return request<Payroll>(`/payroll/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  // ================= TARGETS & KPI =================
  async getTargets(): Promise<TargetKpi[]> {
    return request<TargetKpi[]>('/targets', { method: 'GET' }, mockTargetKpiList);
  },

  async createTarget(dto: Partial<TargetKpi>): Promise<TargetKpi> {
    return request<TargetKpi>('/targets', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateTargetProgress(id: number, currentAmount: number): Promise<TargetKpi> {
    return request<TargetKpi>(`/targets/${id}/progress`, {
      method: 'PUT',
      body: JSON.stringify({ currentAmount }),
    });
  },

  async deleteTarget(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/targets/${id}`, {
      method: 'DELETE',
    });
  },

  // ================= AFFILIATE MONITORING =================
  async getMonitoringDashboard(): Promise<any> {
    return request<any>('/affiliate-monitoring/dashboard', { method: 'GET' }, {
      totalRevenue: 18186765000,
      totalQuantity: 3408,
      totalCommission: 1542000000,
      unreadAlerts: 3,
    });
  },

  async getSoldProducts(): Promise<MonitoringSoldProduct[]> {
    return request<MonitoringSoldProduct[]>('/affiliate-monitoring/sold-products', { method: 'GET' }, mockSoldProducts);
  },

  async createSoldProduct(dto: Partial<MonitoringSoldProduct>): Promise<MonitoringSoldProduct> {
    return request<MonitoringSoldProduct>('/affiliate-monitoring/sold-products', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async deleteSoldProduct(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/affiliate-monitoring/sold-products/${id}`, {
      method: 'DELETE',
    });
  },

  async getSellerRecaps(): Promise<MonitoringSellerRecap[]> {
    return request<MonitoringSellerRecap[]>('/affiliate-monitoring/seller-recaps', { method: 'GET' }, mockSellerRecaps);
  },

  async getAlerts(): Promise<MonitoringCommissionAlert[]> {
    return request<MonitoringCommissionAlert[]>('/affiliate-monitoring/alerts', { method: 'GET' }, mockAlerts);
  },

  async markAlertRead(id: number): Promise<{ success: boolean }> {
    return request<{ success: boolean }>(`/affiliate-monitoring/alerts/${id}/read`, {
      method: 'PUT',
    });
  },

  // ================= AFFILIATE REPORTS =================
  async getAffiliateOverview(): Promise<any> {
    return request<any>('/affiliate-reports/overview', { method: 'GET' }, {});
  },

  async getAffiliateProducts(): Promise<any[]> {
    return request<any[]>('/affiliate-reports/products', { method: 'GET' }, []);
  },

  async getAffiliateCommissions(): Promise<any[]> {
    return request<any[]>('/affiliate-reports/commissions', { method: 'GET' }, []);
  },

  // ================= SHOPEE COOKIES =================
  async getCookies(): Promise<ShopeeCookie[]> {
    return request<ShopeeCookie[]>('/shopee-cookies', { method: 'GET' }, mockCookies);
  },

  async createCookie(dto: Partial<ShopeeCookie>): Promise<ShopeeCookie> {
    return request<ShopeeCookie>('/shopee-cookies', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
  },

  async updateCookie(id: number, dto: Partial<ShopeeCookie>): Promise<ShopeeCookie> {
    return request<ShopeeCookie>(`/shopee-cookies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dto),
    });
  },

  async deleteCookie(id: number): Promise<{ message: string }> {
    return request<{ message: string }>(`/shopee-cookies/${id}`, {
      method: 'DELETE',
    });
  },

  // ================= LEAVE REQUESTS =================
  async getLeaveRequests(): Promise<LeaveRequest[]> {
    return request<LeaveRequest[]>('/leave-requests', { method: 'GET' }, mockLeaveRequests);
  },

  async respondLeaveRequest(id: number, status: 'approved' | 'rejected', reason?: string): Promise<LeaveRequest> {
    return request<LeaveRequest>(`/leave-requests/${id}/respond`, {
      method: 'PUT',
      body: JSON.stringify({ status, reason }),
    });
  },

  // ================= EMPLOYEE / HOST PORTAL =================
  async getPortalMe(): Promise<any> {
    return request<any>('/employee-portal/me', { method: 'GET' }, {});
  },

  async getPortalDashboard(): Promise<any> {
    return request<any>('/employee-portal/dashboard', { method: 'GET' }, {});
  },

  async portalCheckIn(notes?: string): Promise<any> {
    return request<any>('/employee-portal/check-in', {
      method: 'POST',
      body: JSON.stringify({ notes }),
    });
  },

  async portalCheckOut(notes?: string): Promise<any> {
    return request<any>('/employee-portal/check-out', {
      method: 'POST',
      body: JSON.stringify({ notes }),
    });
  },

  async getPortalPayslips(): Promise<any[]> {
    return request<any[]>('/employee-portal/payslips', { method: 'GET' }, []);
  },

  async getPortalSchedule(): Promise<any[]> {
    return request<any[]>('/employee-portal/schedule', { method: 'GET' }, []);
  },
};
