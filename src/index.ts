import 'reflect-metadata'
import {
  createConnection,
  getRepository,
  In,
  createQueryBuilder,
} from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { Modules } from './modules'
import AppConfig from 'config/AppConfig'
import databaseConfig from 'config/databaseConfig'
import Users from './modules/user/models'
import { userFromToken, createToken } from './auth'
import directives from './directives'
import { loadSchemaFiles } from 'graphql-toolkit'
import { SchemaDirectiveVisitor } from 'graphql-tools'

createConnection(databaseConfig)
  .then(async (connection) => {
    const { typeDefs, resolvers, schema, schemaDirectives } = Modules
    SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives)
    const server = new ApolloServer({
      //typeDefs: loadSchemaFiles('./directives/directives.graphql'),
      typeDefs,
      resolvers,
      schema,
      context: async ({ req }) => {
        const token = req.headers.authorization
        const user = await userFromToken(token)
        return { user, createToken }
      },
      // Add Engine here for analytics
      tracing: AppConfig.TRACING,
      debug: AppConfig.DEBUG,
      //schemaDirectives: directives,
    })

    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`)
    })
  })
  .catch((error) => console.log(error))
