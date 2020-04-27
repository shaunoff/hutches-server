import 'reflect-metadata'

import { createConnection } from 'typeorm'

import databaseConfig from './databaseConfig'
import User from '../modules/user/models'
import Asset from '../modules/asset/models'
import Comment from '../modules/comment/models'
import Like from '../modules/like/models'
import Tag from '../modules/tag/models'
import { items } from './items'
import { users } from './users'
;(async () => {
  console.log('Beginning dbseed task.')

  const conn = await createConnection(databaseConfig)
  console.log('PG connected.')

  for (const user of users) {
    const userData = new User()
    userData.firstName = user.profile.firstName
    userData.lastName = user.profile.lastName
    userData.email = user.emails[0].address
    userData.password = user.services.password.bcrypt
    userData.createdAt = user.createdAt.$date
    const savedUser = await userData.save()
    const assets = items.filter((item) => item.userId === user._id)
    assets.forEach(async (asset) => {
      const assetData = new Asset()
      assetData.userId = savedUser.id
      assetData.fileName = asset.fileName
      assetData.createdAt = asset.added.$date
      const savedAsset = await assetData.save()
      asset.comments.forEach(async (comment) => {
        const commentData = new Comment()
        commentData.userId = savedUser.id
        commentData.assetId = savedAsset.id
        commentData.comment = comment.comment
        commentData.createdAt = comment.added.$date
        await commentData.save()
      })
      asset.likes.forEach(async (like) => {
        const likeData = new Like()
        likeData.createdAt = like.added.$date
        likeData.userId = savedUser.id
        likeData.assetId = savedAsset.id
        await likeData.save()
      })
      asset.tagged.forEach(async (tag) => {
        const tagData = new Tag()
        tagData.userId = savedUser.id
        tagData.assetId = savedAsset.id
        await tagData.save()
      })
    })
  }

  // for (const item of items) {
  //   const asset = new Asset()
  //   //asset.id = item._id
  //   const user = await User.findOne({ oldId: item.userId })
  //   asset.url = item.url
  //   if (user) {
  //     asset.userId = user.id
  //   }

  //   asset.fileName = item.fileName
  //   asset.added = item.added.$date
  //   await asset.save()
  //   console.log(`Asset saved. id = ${asset.id}`)
  // }

  //Close connection
  await conn.close()
  console.log('PG connection closed.')

  console.log('Finished dbseed task.')
})()
