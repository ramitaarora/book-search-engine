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