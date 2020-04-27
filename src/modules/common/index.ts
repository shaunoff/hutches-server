import { GraphQLModule } from '@graphql-modules/core'
import { loadSchemaFiles } from 'graphql-toolkit'
import directives from '../../directives'

export const CommonModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  schemaDirectives: {
    tag: directives.LogDirective,
    formatDate: directives.FormatDateDirective,
  },
  context: (session: any) => session,
})
