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
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  createdAt!: string

  @Column({ nullable: true })
  assetId!: string

  @Column({ nullable: true })
  userId!: string

  @Column({ nullable: true })
  comment!: string

  @ManyToOne(
    (type) => Asset,
    (asset) => asset.comments,
  )
  asset!: Asset | null

  @ManyToOne((type) => User, { eager: true })
  user!: User | null
}
