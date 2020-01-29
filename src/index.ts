import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { Modules } from './modules'

const server = new ApolloServer({
  modules: Modules,
  context: (session) => session,
  engine: {
    apiKey: 'service:promoboxx:KIUABFJrdIzEVAi87HRcjw',
  },
  tracing: true,
  debug: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
