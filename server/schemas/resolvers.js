const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, args) => {
            return await User.findOne({
                $or: [{_id: args._id }, {username: args.username}],
            })
        },
        
    },
    
    Mutation: {
        createUser: async (parent, args) => {
            return await User.create({args});
        },
        login: async (parent, args) => {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },

    }
};

module.exports = resolvers;