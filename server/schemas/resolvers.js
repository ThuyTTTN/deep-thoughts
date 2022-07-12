// set up the resolver that will serve the response for the query defined in 'typeDefs.js' file

//import Thought
const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        //we pass in the parent as more of a placeholder parameter. It won't be used, but we need something in that first parameter's spot so we can access the username argument from the second parameter
        thoughts: async (parent, { username }) => {
            

        //use a ternary operator to check if username exists. If it does, we set params to an object with a username key set to that value. If it doesn't, we simply return an empty object.
        const params = username ? { username } : {};
        //.find is to query thought;  .sort is desc. order
        return Thought.find(params).sort({ createdAt: -1 })
      },
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
      },

        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
    },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.crate(args);

            return user;
        },
        login: async () => {
    
        }
      
    }

  };

  
  module.exports = resolvers;