import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm'

import User from '../../user/models'
import Comment from '../../comment/models'
import Like from '../../like/models'
import Tag from '../../tag/models'

@Entity()
export default class Asset extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  createdAt!: string

  @Column({ nullable: true })
  userId!: string

  @Column({ nullable: true })
  url!: string

  @Column({ nullable: true })
  fileName!: string

  @Column({ nullable: true })
  added!: string

  @OneToMany(
    (type) => Comment,
    (comment) => comment.asset,
    { eager: true },
  )
  comments!: Comment[] | []

  @OneToMany(
    (type) => Like,
    (like) => like.asset,
    { eager: true },
  )
  likes!: Like[] | []

  @OneToMany(
    (type) => Tag,
    (tag) => tag.asset,
    { eager: true },
  )
  tags!: Tag[] | []

  @ManyToOne(
    (type) => User,
    (user) => user.assets,
  )
  user!: User | null
}
