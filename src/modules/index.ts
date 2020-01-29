import { GraphQLModule } from '@graphql-modules/core'
import { CampaignModule } from './campaign'
import { WalletModule } from './wallet'

export const Modules = [
  new GraphQLModule({
    imports: [CampaignModule, WalletModule],
  }),
]
