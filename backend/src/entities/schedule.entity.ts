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

export enum ShiftType {
  PAGI = 'pagi',
  SIANG = 'siang',
  MALAM = 'malam',
  FULL = 'full',
  LIBUR = 'libur',
}

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;

  @ManyToOne(() => Studio, { eager: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column()
  studioId: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'text', default: ShiftType.PAGI })
  shift: ShiftType;

  @Column({ default: '08:00' })
  startTime: string;

  @Column({ default: '12:00' })
  endTime: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
