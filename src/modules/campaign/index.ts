import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Providers
import { CampaignAPI } from './providers'

export const CampaignModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: () => [
    CampaignAPI,
    //Another provide/useValue object can be here...
  ],
  context: (session: any) => {
    // On each request, read the 'Authorization' header and store it in context
    // to be used by all resolvers.
    if (session?.req?.headers?.authorization) {
      return {
        token: session.req.headers.authorization,
      }
    } else {
      return {}
    }
  },
})
