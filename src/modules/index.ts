import { GraphQLModule } from '@graphql-modules/core'
import { CommonModule } from './common'
import { UserModule } from './user'
import { AssetModule } from './asset'
import { CommentModule } from './comment'
import { LikeModule } from './like'
import { TagModule } from './tag'
import directives from '../directives'

//console.log(UserModule)
export const Modules = new GraphQLModule({
  schemaDirectives: {
    tag: directives.LogDirective,
  },
  imports: ({ config }) => [
    CommonModule,
    UserModule.forRoot({
      remoteEndpoint: 'https://service.dev.pbxx.io',
    }),
    AssetModule.forRoot({
      remoteEndpoint: 'https://service.dev.pbxx.io',
    }),
    CommentModule.forRoot({
      remoteEndpoint: 'https://service.dev.pbxx.io',
    }),
    LikeModule.forRoot({
      remoteEndpoint: 'https://service.dev.pbxx.io',
    }),
    TagModule.forRoot({
      remoteEndpoint: 'https://service.dev.pbxx.io',
    }),
  ],
  //configRequired: true,
})
