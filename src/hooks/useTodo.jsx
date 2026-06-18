import { useMutation, useQuery } from "@apollo/client/react";
import {
    ALL_TODOS,
    CREATE_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
} from "../graphql/graphql";
const useTodo = () => {
    const [updateTodo] = useMutation(UPDATE_TODO, {
        update(cache, { data: { updateTodo: updated } }) {
            cache.modify({
                fields: {
                    allTodos(existing = []) {
                        return existing.map((todo) =>
                            todo.id === updated.id ? updated : todo,
                        );
                    },
                },
            });
        },
    });
    const [removeTodo, { data: removeData }] = useMutation(REMOVE_TODO, {
        update(cache, { data: { removeTodo } }) {
            cache.modify({
                fields: {
                    allTodos(todos = []) {
                        return todos.filter((todo) => {
                            return todo.__ref !== `Todo:${removeTodo.id}`;
                        });
                    },
                },
            });
        },
    });

    const [addTodo, { data }] = useMutation(CREATE_TODO, {
        update(cache, { data: { addTodo: newTodo } }) {
            cache.modify({
                fields: {
                    allTodos(arr = []) {
                        return [newTodo, ...arr];
                    },
                },
            });
        },
    });

    const updateTodoHandle = (variables) => {
        updateTodo({
            variables,
        });
    };

    const addTodoHandle = ({ e, editTodo, setEditTodo, input }) => {
        e.preventDefault();

        if (!input.length) {
            alert("Please fill a field!");
            return;
        }
        if (editTodo) {
            updateTodoHandle({
                id: editTodo.id,
                title: input,
            });
            setEditTodo(null);
        } else {
            addTodo({
                variables: {
                    title: input,
                    isCompleted: false,
                },
            });
        }
    };

    const removeTodoHandle = (id) => {
        removeTodo({
            variables: {
                id,
            },
        });
    };
    return { addTodoHandle, updateTodoHandle, removeTodoHandle };
};

export default useTodo;
