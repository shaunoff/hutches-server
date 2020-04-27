import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

import User from '../modules/user/models'
import Asset from '../modules/asset/models'
import Comment from '../modules/comment/models'
import Like from '../modules/like/models'
import Tag from '../modules/tag/models'

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'shaunhutch',
  password: 'Woodbird966',
  database: 'shaunhutch',
  synchronize: true,
  logging: false,
  entities: [User, Asset, Comment, Like, Tag],
}

export default typeOrmConfig
