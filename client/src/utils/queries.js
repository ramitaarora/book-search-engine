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

export const GET_ME = gql `
    query me {
        me {
        _id
        email
        username
        savedBooks {
            title
            bookId
            authors
            description
            image
            link
        }
        }
    }
`