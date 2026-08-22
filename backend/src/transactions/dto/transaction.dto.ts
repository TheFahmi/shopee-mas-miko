import { TransactionStatus, TrafficSource } from '../../entities';

export class CreateTransactionDto {
  @IsNumber()
  productId: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsNumber()
  totalPrice: number;

  @IsNumber()
  commission: number;

  @IsOptional()
  @IsNumber()
  gmv?: number;

  @IsOptional()
  @IsEnum(TransactionStatus)
  status?: TransactionStatus;

  @IsOptional()
  @IsEnum(TrafficSource)
  trafficSource?: TrafficSource;

  @IsDateString()
  transactionDate: string;

  @IsOptional()
  @IsBoolean()
  isManual?: boolean;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  shopeeOrderId?: string;

  @IsOptional()
  @IsString()
  liveSessionId?: string;

  @IsOptional()
  @IsString()
  videoId?: string;

  @IsOptional()
  @IsString()
  socialPlatform?: string;

  @IsOptional()
  @IsNumber()
  clicks?: number;

  @IsOptional()
  @IsNumber()
  views?: number;
}

export class UpdateTransactionDto {
  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  @IsNumber()
  commission?: number;

  @IsOptional()
  @IsNumber()
  gmv?: number;

  @IsOptional()
  @IsEnum(TransactionStatus)
  status?: TransactionStatus;

  @IsOptional()
  @IsEnum(TrafficSource)
  trafficSource?: TrafficSource;

  @IsOptional()
  @IsDateString()
  transactionDate?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class TransactionFilterDto {
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsEnum(TransactionStatus)
  status?: TransactionStatus;

  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsBoolean()
  isManual?: boolean;

  @IsOptional()
  @IsEnum(TrafficSource)
  trafficSource?: TrafficSource;
}
