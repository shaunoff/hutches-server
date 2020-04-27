import { DataSource } from 'apollo-datasource'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { NewAssetData, UpdateAssetData } from '@models'
import { getConnection } from 'typeorm'
import Asset from '../models'
import User from '../../user/models'

@Injectable({
  scope: ProviderScope.Session,
})
export class AssetAPI extends DataSource {
  public connection: any
  public constructor() {
    super()
    this.connection = getConnection()
  }

  async getAssets() {
    return Asset.find({ relations: ['user', 'comments'] })
  }

  async addAsset(data: NewAssetData) {
    const asset = new Asset()
    //asset.name = data.name
    //asset.userId = data.userId
    asset.url = data.url
    asset.fileName = data.fileName
    asset.added = data.added
    const user = await User.findOne(1)
    if (user) {
      asset.user = user
    }

    return asset.save()
  }

  async updateAsset(data: UpdateAssetData) {
    console.log(data)
    const asset = await Asset.findOne(data.id)
    if (asset) {
      Asset.merge(asset, data)
      return Asset.save(asset)
    }
  }

  async deleteAsset(id: string) {
    await Asset.delete(id)
    return { id }
  }
}
