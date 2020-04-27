import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Dependencies
import { AssetModule } from '../asset'

//Providers
import { CommentAPI } from './providers'

export const CommentModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: () => [
    CommentAPI,
    //Another provide/useValue object can be here...
  ],
  imports: [AssetModule],
  context: (session: any) => {
    return { connection: session.connection }
  },
})
