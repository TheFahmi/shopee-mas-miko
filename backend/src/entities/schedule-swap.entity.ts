import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Schedule } from './schedule.entity';

export enum SwapStatus {
  PENDING_PEER = 'pending_peer',
  PEER_APPROVED = 'peer_approved',
  PENDING_ADMIN = 'pending_admin',
  APPROVED = 'approved',
  REJECTED_PEER = 'rejected_peer',
  REJECTED_ADMIN = 'rejected_admin',
  CANCELLED = 'cancelled',
}

@Entity('schedule_swap_requests')
export class ScheduleSwapRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'requesterId' })
  requester: Employee;

  @Column()
  requesterId: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'targetId' })
  target: Employee;

  @Column()
  targetId: number;

  @ManyToOne(() => Schedule, { eager: true })
  @JoinColumn({ name: 'requesterScheduleId' })
  requesterSchedule: Schedule;

  @Column()
  requesterScheduleId: number;

  @ManyToOne(() => Schedule, { eager: true })
  @JoinColumn({ name: 'targetScheduleId' })
  targetSchedule: Schedule;

  @Column()
  targetScheduleId: number;

  @Column({ type: 'text', default: SwapStatus.PENDING_PEER })
  status: SwapStatus;

  @Column({ type: 'text', nullable: true })
  reason: string | null;

  @Column({ type: 'text', nullable: true })
  peerNote: string | null;

  @Column({ type: 'text', nullable: true })
  adminNote: string | null;

  @Column({ nullable: true })
  approvedBy: number;

  @Column({ type: 'datetime', nullable: true })
  peerRespondedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  adminRespondedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
