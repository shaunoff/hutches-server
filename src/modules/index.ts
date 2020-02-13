import { GraphQLModule } from '@graphql-modules/core'
import { CampaignModule } from './campaign'
import { WalletModule } from './wallet'

export const Modules = [
  new GraphQLModule({
    imports: ({ config }) => [
      CampaignModule.forRoot({
        remoteEndpoint: 'https://api.dev.pbxx.io', //Now we can inject config from this level
      }),
      WalletModule.forRoot({
        remoteEndpoint: 'https://service.dev.pbxx.io',
      }),
    ],
    // configRequired: true,
  }),
]
