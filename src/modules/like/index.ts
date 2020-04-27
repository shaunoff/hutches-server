import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Dependencies
import { AssetModule } from '../asset'

//Providers
import { LikeAPI } from './providers'

export const LikeModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: () => [
    LikeAPI,
    //Another provide/useValue object can be here...
  ],
  imports: [AssetModule],
  context: (session: any) => {
    return { connection: session.connection }
  },
})
