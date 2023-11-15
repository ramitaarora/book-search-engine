import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getSingleUser($id: ID, $username: String) {
        getSingleUser(_id: $id, username: $username) {
        email
        username
        savedBooks {
            title
            authors
        }
        }
    }
`