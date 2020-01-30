import { WalletService } from '../providers'
import { QueryResolvers } from '@models'
import getParamsForFields from '@lib/getParamsForFields'

export const Query: QueryResolvers = {
  getWallets: (root, { params = {} }, { injector }, info) => {
    params = getParamsForFields(info, params)
    return injector.get(WalletService).getWallets(params)
  },
}
