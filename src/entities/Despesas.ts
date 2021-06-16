import { Entity, PrimaryColumn, CreateDateColumn, Column, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Responsaveis } from './Responsaveis';

@Entity('despesas')
class Despesas {

  @PrimaryColumn()
  id: string;

  @Column()
  data_da_compra: string;

  @Column()
  local_da_compra: string;

  @Column()
  valor: number;

  @JoinColumn({ name: 'responsavel_id' })
  @ManyToOne(() => Responsaveis)
  responsaveis: Responsaveis;

  @Column()
  responsavel_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Despesas }