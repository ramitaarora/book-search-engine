const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, args) => {
            return await User.findOne({
                $or: [{_id: args._id }, {username: args.username}],
            })
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
          },
    },
    
    Mutation: {
        createUser: async (parent, {username, email, password}) => {
            console.log('createUser!')
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }; 
        },
        login: async (parent, {email, password}) => {
            console.log('login!')
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, {body}, context) => {
            return await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true}
            );
        },
        deleteBook: async (parent, {bookId}, context) => {
            return await User.findOneAndUpdate(findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              )
            )
        },

    }
};

module.exports = resolvers;