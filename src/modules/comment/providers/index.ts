import { DataSource } from 'apollo-datasource'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { IComment } from '@models'
import { getConnection } from 'typeorm'
import Comment from '../models'
import Asset from '../../asset/models'
import User from '../../user/models'

@Injectable({
  scope: ProviderScope.Session,
})
export class CommentAPI extends DataSource {
  public connection: any
  public constructor() {
    super()
    this.connection = getConnection()
  }

  async getComments() {
    return Comment.find({ relations: ['asset', 'user'] })
  }

  async addComment(data: IComment) {
    const comment = new Comment()

    comment.assetId = data.assetId
    comment.comment = data.comment

    const asset = await Asset.findOne(data.assetId)
    const user = await User.findOne(data.userId)
    if (asset) {
      comment.asset = asset
    }
    if (user) {
      comment.user = user
    }

    return comment.save()
  }

  // async updateAsset(data: UpdateAssetData) {
  //   console.log(data)
  //   const asset = await Asset.findOne(data.id)
  //   if (asset) {
  //     Asset.merge(asset, data)
  //     return Asset.save(asset)
  //   }
  // }

  // async deleteAsset(id: string) {
  //   await Asset.delete(id)
  //   return { id }
  // }
}
