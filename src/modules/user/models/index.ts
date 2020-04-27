import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm'

import Asset from '../../asset/models'

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  isAdmin: boolean = false

  @CreateDateColumn()
  createdAt!: string

  @Column({ nullable: true })
  firstName!: string

  @Column({ nullable: true })
  lastName!: string

  @Column({ nullable: true })
  email!: string

  @Column({ nullable: true })
  password!: string

  @Column({ nullable: true })
  avatar!: string

  @OneToMany(
    (type) => Asset,
    (asset) => asset.user,
    //{ eager: true },
  )
  assets!: Asset[]

  // @OneToMany(
  //   (type) => Comment,
  //   (comment) => comment.user,
  // )
  // comments!: Comment[] | []
}
