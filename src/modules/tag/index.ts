import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Dependencies
import { AssetModule } from '../asset'

//Providers
import { TagAPI } from './providers'

export const TagModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: () => [
    TagAPI,
    //Another provide/useValue object can be here...
  ],
  imports: [AssetModule],
  context: (session: any) => {
    return { connection: session.connection }
  },
})
