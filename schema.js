export default `
  type Query {
    hello: String
  }

  type Query {
    sessions (
      id: ID,
      title: String,
      description: String): [Session],
    sessionById(id:ID): Session
  }

  type Session {
    id: ID!,
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    track: String @deprecated(reason: "going to deprecate soon")
  }
`