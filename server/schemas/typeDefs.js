const typeDefs = `
    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getSingleUser: User
    }

    type Mutation {
        createUser: User
        login(email: String, password: String, username: String): Auth
        saveBook(userId: ID!, body: String!): User
        deleteBook(userId: ID!, bookId: ID!)
    }
`;

module.exports = typeDefs;