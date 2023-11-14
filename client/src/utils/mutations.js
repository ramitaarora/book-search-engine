import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String, $password: String!, $username: String) {
        login(email: $email, username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, password: String!) {
        createUser(username: $username, email: $email: password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $body: String!) {
        saveBook(userId: $userId, body: $body) {
            user {
                _id
                savedBooks
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($userId: ID!, $bookId: String!) {
        deleteBook(userId: $userId, bookId: $bookId) {
            user {
                _id
                savedBooks
            }
        }
    }
`;