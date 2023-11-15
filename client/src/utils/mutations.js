import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String, $email: String, $password: String!) {
        login(username: $username, email: $email, password: $password) {
        token
        user {
            username
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        _id
        email
        username
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $body: String!) {
        saveBook(userId: $userId, body: $body) {
        savedBooks {
            bookId
            title
        }
        _id
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($userId: ID!, $bookId: String!) {
        deleteBook(userId: $userId, bookId: $bookId) {
        savedBooks {
            bookId
            title
        }
        }
    }
`;