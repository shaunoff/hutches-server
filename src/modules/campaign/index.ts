import { GraphQLModule } from '@graphql-modules/core'

//Providers
import { CampaignAPI } from './provider'

// TyeDefs
import { typeDefs } from './typeDefs'

//Resolvers
import { Query } from './resolvers'

export const CampaignModule = new GraphQLModule({
  typeDefs: [typeDefs],
  resolvers: {
    Query,
  },
  providers: [CampaignAPI],
  context: (session) => {
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
