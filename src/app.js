import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefsModule from './graphql/typeDef.js'
import resolversModule from './graphql/resolvers.js'
import peopleContactRoutesModule from './routes/PeopleContactRoutes.js'
import { connectDB } from './db.js'

const app = express()

connectDB()

async function start () {
  const apolloServer = new ApolloServer({ typeDefs: typeDefsModule, resolvers: resolversModule })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.use('/', peopleContactRoutesModule)

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () =>
    console.log('Server on port', PORT)
  )
}

start()
