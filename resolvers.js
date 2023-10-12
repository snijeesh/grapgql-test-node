import { SessionAPI } from "./datasources/sessions.js";

export default {
    Query: {
      hello: (_, __, {dataSources}) => 'Hello world!',
      sessions: (parent, args, context) => {
          //console.log(context.dataSources);
          return new SessionAPI().getSessions(args);
      },
      sessionById: (parent, {id}, {dataSources}) => {
          return new SessionAPI().getSessionById(id);
      }
    },
  };