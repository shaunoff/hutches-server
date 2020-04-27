import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm'

import Asset from '../../asset/models'
import User from '../../user/models'

@Entity()
export default class Like extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  createdAt!: string

  @Column({ nullable: true })
  assetId!: string

  @Column({ nullable: true })
  userId!: string

  @ManyToOne(
    (type) => Asset,
    (asset) => asset.likes,
  )
  asset!: Asset | null

  @ManyToOne((type) => User)
  user!: User | null
}
