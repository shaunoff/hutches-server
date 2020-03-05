import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { Modules } from './modules'
import AppConfig from 'config/AppConfig'

const server = new ApolloServer({
  modules: Modules,
  context: (session) => session,
  engine: {
    apiKey: AppConfig.ENGINE_API_KEY,
  },
  tracing: AppConfig.TRACING,
  debug: AppConfig.DEBUG,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
