import { SchemaDirectiveVisitor } from 'apollo-server'
import { defaultFieldResolver, GraphQLString } from 'graphql'
import dfnsFormat from 'date-fns/format'

const formatDate = (stamp: any, format: any) => dfnsFormat(stamp, format)

class LogDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any, type: any) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = async function(
      root: any,
      { format, ...rest }: any,
      ctx: any,
      info: any,
    ) {
      console.log(`⚡️  ${type.objectType}.${field.name}`)
      return resolve.call(this, root, rest, ctx, info)
    }
  }
}

class FormatDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field
    const { format: defaultFormat } = this.args

    field.args.push({
      name: 'format',
      type: GraphQLString,
    })

    field.resolve = async function(
      root: any,
      { format, ...rest }: any,
      ctx: any,
      info: any,
    ) {
      const date = await resolve.call(this, root, rest, ctx, info)
      return formatDate(date, format || defaultFormat)
    }
  }
}

const directives = {
  LogDirective,
  FormatDateDirective,
}

export default directives
