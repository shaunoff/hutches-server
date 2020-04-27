import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'
import { DataSource } from 'apollo-datasource'
import { Inject, Injectable, ProviderScope } from '@graphql-modules/di'
import { NewUserData, LoginData } from '@models'
import { getConnection } from 'typeorm'
import { createToken } from '../../../auth'
import User from '../models'

@Injectable({
  scope: ProviderScope.Session,
})
export class UserAPI extends DataSource {
  public connection: any
  public constructor() {
    super()
    this.connection = getConnection()
  }

  async getUsers() {
    return User.find({ relations: ['assets'] })
  }

  // async getMe(user: any) {
  //   console.log('hfjgdgfjdgfjhdgf', user.id)
  //   return await User.find({ where: { id: user.id } })
  // }

  async signup(data: NewUserData) {
    const existing = await User.findOne({ email: data.email })
    if (existing) {
      throw new AuthenticationError('User already exists')
    }
    const password = await bcrypt.hash(data.password, 10)
    data.password = password
    const user = User.create(data)
    const newUser = await user.save()

    const token = createToken(newUser)
    return {
      token,
      user,
    }
  }

  async signin(
    { email, password }: LoginData,
    createToken: (user: any) => any,
  ) {
    const user = await User.findOne({ email })

    if (!user) throw new Error('Invalid Email')

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('Invalid Password')
    }
    const token = createToken(user)
    return {
      token,
      user,
    }
  }
}
