import { WalletService } from './provider'
import { QueryResolvers, MutationResolvers } from '../../../generated/graphql'
import getParamsForFields from '../../lib/getParamsForFields'

const addFunds: MutationResolvers = {
  addFunds: (root, { params = {} }, { injector }, info) => {
    params = getParamsForFields(info, params)
    return injector.get(WalletService).addFunds(params)
  },
}

const getWallets: QueryResolvers = {
  getWallets: (root, { params = {} }, { injector }, info) => {
    params = getParamsForFields(info, params)
    return injector.get(WalletService).getWallets(params)
  },
}

export const Query = {
  ...getWallets,
}

export const Mutation = {
  ...addFunds,
}
