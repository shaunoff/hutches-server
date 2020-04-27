import jwt from 'jsonwebtoken'
import UserModel from '../modules/user/models'
import { User } from '@models'
import { AuthenticationError } from 'apollo-server'
const secret = 'shaunoff'

export const createToken = ({ id }: any): string =>
  jwt.sign({ id }, secret, { algorithm: 'HS256' })

export const userFromToken = async (token = '') => {
  try {
    if (!token) return null
    const validToken: any = jwt.verify(token, secret, { algorithms: ['HS256'] })
    const user = await UserModel.findOne(validToken.id, {
      relations: ['assets'],
    })

    return user
  } catch (e) {
    console.log(e)
    return null
  }
}

export const authenticated = (next: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (!context.user) {
    throw new AuthenticationError('Not Authenticated')
  }
  return next(root, args, context, info)
}

export const authorized = (role: any, next: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (context.user.role !== role) {
    throw new AuthenticationError(`you must have ${role} role`)
  }

  return next(root, args, context, info)
}
