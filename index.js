import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { SessionAPI } from './datasources/sessions.js'

import typeDefs from "./schema.js";
import resolvers from "./resolvers.js"; 

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //dataSources not working right now.
  dataSources: () => ({
            sessionApi: new SessionAPI()
        }),
        context: () => {
            return {
                dataSources: {
                    sessionApi: new SessionAPI()
               }
            }
          }
})

const { url } = await startStandaloneServer(server)

console.log(`🚀 Server ready at ${url}`)