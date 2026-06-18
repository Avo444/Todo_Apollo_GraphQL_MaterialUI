import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
    query {
        allTodos {
            id
            title
            isCompleted
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID!, $title: String, $isCompleted: Boolean) {
        updateTodo(id: $id, title: $title, isCompleted: $isCompleted) {
            id
            title
            isCompleted
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation RemoveTodo($id: ID!) {
        removeTodo(id: $id) {
            id
        }
    }
`;

export const CREATE_TODO = gql`
    mutation CreateTodo($title: String!, $isCompleted: Boolean!) {
        createTodo(title: $title, isCompleted: $isCompleted) {
            id
            title
            isCompleted
        }
    }
`;
