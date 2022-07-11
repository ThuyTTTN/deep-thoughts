// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs; type Query{} defines a Query; ex: create Query: helloWorld as a string; Query with [] will return an array
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

type Query {              
    thoughts(username: String): [Thought]
}`;

// export the typeDefs
module.exports = typeDefs;