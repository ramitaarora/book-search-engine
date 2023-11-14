import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($_id: String!) {
        getSingleUser(username: $username) {
            _id
            username
            email
            savedBooks
        }
    }
`