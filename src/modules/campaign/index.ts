import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit'

//Providers
import { CampaignAPI } from './providers'
import { RemoteEndpoint } from '@lib/symbols'

export interface CampaignModuleConfig {
  remoteEndpoint: string
}

export const CampaignModule = new GraphQLModule<CampaignModuleConfig>({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
  providers: ({ config: { remoteEndpoint } }) => [
    CampaignAPI,
    {
      provide: RemoteEndpoint,
      useValue: remoteEndpoint,
    },
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
  configRequired: true,
})
