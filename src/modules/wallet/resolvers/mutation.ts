import { WalletService } from '../providers'
import { MutationResolvers } from '@models'
import getParamsForFields from '@lib/getParamsForFields'

export const Mutation: MutationResolvers = {
  addFunds: (root, { params = {} }, { injector }, info) => {
    params = getParamsForFields(info, params)
    return injector.get(WalletService).addFunds(params)
  },
}
