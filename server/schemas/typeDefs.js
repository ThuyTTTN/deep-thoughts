// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs; type Query{} defines a Query; ex: create Query: helloWorld as a string
const typeDefs = gql`
type Query {              
    helloWorld: String
}`;

// export the typeDefs
module.exports = typeDefs;