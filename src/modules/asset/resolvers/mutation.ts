import { AssetAPI } from '../providers'
import { MutationResolvers } from '@models'

export const Mutation: MutationResolvers = {
  addAsset: (root, { data = {} }, { injector }, info) => {
    return injector.get(AssetAPI).addAsset(data)
  },
  updateAsset: (root, { data }, { injector }, info) => {
    return injector.get(AssetAPI).updateAsset(data)
  },
  deleteAsset: (root, { id }, { injector }, info) => {
    return injector.get(AssetAPI).deleteAsset(id)
  },
}
