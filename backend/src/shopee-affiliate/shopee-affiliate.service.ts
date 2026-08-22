import { ShopeeCookiesService } from '../shopee-cookies/shopee-cookies.service';

export interface AffiliateReportParams {
  pageSize?: number;
  pageNum?: number;
  purchaseTimeStart?: number; // unix timestamp
  purchaseTimeEnd?: number;   // unix timestamp
  version?: number;
}

const AFFILIATE_BASE_URL = 'https://affiliate.shopee.co.id';

@Injectable()
export class ShopeeAffiliateService {
  private readonly logger = new Logger(ShopeeAffiliateService.name);

  constructor(
    private readonly cookiesService: ShopeeCookiesService,
  ) {}

  // ========== AFFILIATE API PROXY ==========

  private getDefaultHeaders(cookieString: string): Record<string, string> {
    return {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,id;q=0.8',
      'affiliate-program-type': '1',
      'content-type': 'application/json',
      'cookie': cookieString,
      'referer': `${AFFILIATE_BASE_URL}/dashboard/report`,
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    };
  }

  private async proxyRequest<T = any>(
    path: string,
    params: Record<string, string> = {},
    method: 'GET' | 'POST' = 'GET',
    body?: any,
  ): Promise<T> {
    const activeCookie = await this.cookiesService.getActiveCookies();
    if (!activeCookie) {
      throw new Error(
        'No active Shopee cookies configured. Please add cookies in Settings.',
      );
    }

    const queryString = new URLSearchParams(params).toString();
    const url = `${AFFILIATE_BASE_URL}${path}${queryString ? '?' + queryString : ''}`;

    this.logger.debug(`Proxying affiliate request to: ${path}`);

    try {
      const fetchOptions: RequestInit = {
        method,
        headers: this.getDefaultHeaders(activeCookie.cookies),
      };

      if (body && method === 'POST') {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const text = await response.text();
        this.logger.error(
          `Affiliate API error [${response.status}]: ${text.substring(0, 200)}`,
        );
        throw new Error(
          `Shopee Affiliate API returned ${response.status}: ${response.statusText}`,
        );
      }

      // Update lastUsedAt
      await this.cookiesService.markUsed(activeCookie);

      return response.json() as Promise<T>;
    } catch (error) {
      if (error instanceof Error && error.message.includes('Affiliate API returned')) {
        throw error;
      }
      this.logger.error(`Failed to proxy request to ${path}: ${error}`);
      throw new Error(`Failed to connect to Shopee Affiliate: ${error}`);
    }
  }

  // ========== REPORT ENDPOINTS ==========

  /**
   * Get conversion report list
   * Matches: /api/v3/report/list
   */
  async getReportList(params: AffiliateReportParams = {}) {
    const now = Math.floor(Date.now() / 1000);
    // Default: last 30 days
    const defaultEnd = now;
    const defaultStart = now - 30 * 24 * 60 * 60;

    return this.proxyRequest('/api/v3/report/list', {
      page_size: String(params.pageSize || 20),
      page_num: String(params.pageNum || 1),
      purchase_time_s: String(params.purchaseTimeStart || defaultStart),
      purchase_time_e: String(params.purchaseTimeEnd || defaultEnd),
      version: String(params.version || 1),
    });
  }

  /**
   * Get dashboard detail (stats overview)
   * Matches: /api/v3/dashboard/detail
   */
  async getDashboardDetail(startTime?: number, endTime?: number) {
    const now = Math.floor(Date.now() / 1000);
    // Default: today (start of day to end of day in WIB, UTC+7)
    const todayStart = now - (now % 86400) - 7 * 3600; // approximate start of day WIB
    const todayEnd = todayStart + 86400 - 1;

    return this.proxyRequest('/api/v3/dashboard/detail', {
      start_time: String(startTime || todayStart),
      end_time: String(endTime || todayEnd),
    });
  }

  // ========== STATUS ======="MW$�9
%�."�D�Ds�˟�z0b���f�eturn this.cookiesService.getStatus();
  }

  /**
   * Test connection by hitting the report list endpoint
   */
  async testConnection(): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const result = await this.getReportList({ pageSize: 1, pageNum: 1 });
      return {
        success: true,
        message: 'Connection to Shopee Affiliate successful!',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: `Connection failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}
