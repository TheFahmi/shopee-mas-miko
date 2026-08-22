import { ShopeeCookiesService } from '../shopee-cookies/shopee-cookies.service';

export interface CreatorSessionListParams {
  page?: number;
  pageSize?: number;
  name?: string;
  orderBy?: string;
  sort?: string;
}

export interface CreatorSessionDetailParams {
  sessionId: string;
}

const CREATOR_BASE_URL = 'https://creator.shopee.co.id';
const SUPPLY_API_PREFIX = '/supply/api/lm/sellercenter';

@Injectable()
export class ShopeeCreatorService {
  private readonly logger = new Logger(ShopeeCreatorService.name);

  constructor(
    private readonly cookiesService: ShopeeCookiesService,
  ) {}

  // ========== CREATOR API PROXY ==========

  private getDefaultHeaders(cookieString: string): Record<string, string> {
    return {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      cookie: cookieString,
      language: 'en',
      referer: `${CREATOR_BASE_URL}/insight/live/list`,
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
      'x-env': 'live',
      'x-region': 'id',
      'x-region-domain': 'co.id',
      'x-region-timezone': '+0700',
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
    const url = `${CREATOR_BASE_URL}${path}${queryString ? '?' + queryString : ''}`;

    this.logger.debug(`Proxying request to: ${path}`);

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
          `Creator API error [${response.status}]: ${text.substring(0, 200)}`,
        );
        throw new Error(
          `Shopee Creator API returned ${response.status}: ${response.statusText}`,
        );
      }

      // Update lastUsedAt
      await this.cookiesService.markUsed(activeCookie);

      return response.json() as Promise<T>;
    } catch (error) {
      if (error instanceof Error && error.message.includes('Creator API returned')) {
        throw error;
      }
      this.logger.error(`Failed to proxy request to ${path}: ${error}`);
      throw new Error(`Failed to connect to Shopee Creator Center: ${error}`);
    }
  }

  // ========== LIVE SESSION ENDPOINTS ==========

  /**
   * Get list of live sessions (realtime/sessionList)
   * Matches: /supply/api/lm/sellercenter/realtime/sessionList
   */
  async getSessionList(params: CreatorSessionListParams = {}) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/sessionList`, {
      page: String(params.page || 1),
      pageSize: String(params.pageSize || 10),
      name: params.name || '',
      orderBy: params.orderBy || '',
      sort: params.sort || '',
    });
  }

  /**
   * Get live session detail/metrics
   * Matches: /supply/api/lm/sellercenter/realtime/sessionDetail
   */
  async getSessionDetail(sessionId: string) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/sessionDetail`, {
      sessionId,
    });
  }

  /**
   * Get realtime live data (current live stream)
   * Matches: /supply/api/lm/sellercenter/realtime/liveData
   */
  async getRealtimeLiveData(sessionId: string) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/liveData`, {
      sessionId,
    });
  }

  /**
   * Get session overview/summary
   * Matches: /supply/api/lm/sellercenter/realtime/overview
   */
  async getS�صݖņ����J[�x#�>'@_��`
Z�Tb yme?: string; endTime?: string } = {}) {
    const queryParams: Record<string, string> = {};
    if (params.startTime) queryParams.startTime = params.startTime;
    if (params.endTime) queryParams.endTime = params.endTime;
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/overview`, queryParams);
  }

  /**
   * Get live session product performance
   * Matches: /supply/api/lm/sellercenter/realtime/productPerformance
   */
  async getProductPerformance(sessionId: string) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/productPerformance`, {
      sessionId,
    });
  }

  /**
   * Get live session order list
   * Matches: /supply/api/lm/sellercenter/realtime/orderList
   */
  async getOrderList(
    sessionId: string,
    params: { page?: number; pageSize?: number } = {},
  ) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/orderList`, {
      sessionId,
      page: String(params.page || 1),
      pageSize: String(params.pageSize || 20),
    });
  }

  /**
   * Get live engagement metrics (comments, likes, shares)
   * Matches: /supply/api/lm/sellercenter/realtime/engagement
   */
  async getEngagement(sessionId: string) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/engagement`, {
      sessionId,
    });
  }

  /**
   * Get viewer analytics for a session
   * Matches: /supply/api/lm/sellercenter/realtime/viewerAnalytics
   */
  async getViewerAnalytics(sessionId: string) {
    return this.proxyRequest(`${SUPPLY_API_PREFIX}/realtime/viewerAnalytics`, {
      sessionId,
    });
  }

  // ========== STATUS ==========

  async getStatus() {
    return this.cookiesService.getStatus();
  }

  /**
   * Test connection by hitting a lightweight endpoint
   */
  async testConnection(): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const result = await this.getSessionList({ page: 1, pageSize: 1 });
      return {
        success: true,
        message: 'Connection to Shopee Creator Center successful!',
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
