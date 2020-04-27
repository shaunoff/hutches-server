import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'
import { CommonModule } from '../common'
//Providers
import { UserAPI } from './providers'

export const UserModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  imports: () => [CommonModule],
  providers: () => [
    UserAPI,
    //Another provide/useValue object can be here...
  ],
  //imports: [AssetModule],
  context: (session: any) => session,
})
