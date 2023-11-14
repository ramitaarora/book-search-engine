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
        saveBook: async (parent, {userId, body}) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true}
            );
        },
        deleteBook: async (parent, {userId, bookId}) => {
            return await User.findOneAndUpdate(findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              )
            )
        },

    }
};

module.exports = resolvers;