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
import { Studio } from './studio.entity';

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
  HALF_DAY = 'half_day',
  LEAVE = 'leave',
  SICK = 'sick',
}

export enum CheckType {
  GPS_PHOTO = 'gps_photo',
  MANUAL = 'manual',
}

@Entity('attendances')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'datetime', nullable: true })
  checkIn: Date;

  @Column({ type: 'datetime', nullable: true })
  checkOut: Date;

  @Column({ type: 'text', default: AttendanceStatus.PRESENT })
  status: AttendanceStatus;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  workHours: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  overtimeHours: number;

  @Column({ default: 0 })
  lateMinutes: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  checkInLat: number | null;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  checkInLng: number | null;

  @Column({ type: 'text', nullable: true })
  checkInAddress: string | null;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  checkOutLat: number | null;

  @Column('decimal', { precision: 10, scale: 7, nullable: true })
  checkOutLng: number | null;

  @Column({ type: 'text', nullable: true })
  checkOutAddress: string | null;

  @Column({ type: 'text', nullable: true })
  checkInPhoto: string | null;

  @Column({ type: 'text', nullable: true })
  checkOutPhoto: string | null;

  @Column({ type: 'text', default: CheckType.MANUAL })
  checkInType: CheckType;

  @Column({ type: 'text', default: CheckType.MANUAL })
  checkOutType: CheckType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
