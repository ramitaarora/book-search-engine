import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($password: String!, $email: String!) {
        login(password: $password, email: $email) {
        token
        user {
            _id
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
        }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($body: String!) {
        saveBook(body: $body) {
        savedBooks {
            bookId
            title
        }
        _id
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
        savedBooks {
            bookId
            title
        }
        }
    }
`;