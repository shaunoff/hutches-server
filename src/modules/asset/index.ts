import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Dependencies
import { UserModule } from '../user'
//Providers
import { AssetAPI } from './providers'

export const AssetModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: () => [
    AssetAPI,
    //Another provide/useValue object can be here...
  ],
  imports: [UserModule],
  context: (session: any) => session,
})
