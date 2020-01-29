import { GraphQLModule } from '@graphql-modules/core'

//Providers
import { WalletService } from './provider'

// TyeDefs
import { typeDefs } from './typeDefs'

//Resolvers
import { Query, Mutation } from './resolvers'

export const WalletModule = new GraphQLModule({
  typeDefs: [typeDefs],
  resolvers: {
    Query,
    Mutation,
  },
  providers: [WalletService],
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
