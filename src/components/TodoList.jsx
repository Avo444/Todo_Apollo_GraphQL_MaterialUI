import { useQuery } from "@apollo/client/react";
import { Button, Checkbox, Stack, Typography } from "@mui/material";

import { useTodo } from "../hooks";
import { TodoItem, TodosContent } from "./Block";
import { ALL_TODOS } from "../graphql/graphql";

const TodoList = ({ setEditTodo }) => {
    const { data, loading, error } = useQuery(ALL_TODOS);
    const { updateTodoHandle, removeTodoHandle } = useTodo();

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }
    return (
        <TodosContent direction={"column"} spacing={10}>
            {data.allTodos.map((item) => (
                <TodoItem key={item.id}>
                    <Checkbox
                        checked={item.isCompleted}
                        onChange={(e) =>
                            updateTodoHandle({
                                id: item.id,
                                isCompleted: e.target.checked,
                            })
                        }
                    />

                    <Typography variant="body1">{item.title}</Typography>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ marginLeft: "auto" }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() =>
                                setEditTodo({ id: item.id, title: item.title })
                            }
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => removeTodoHandle(item.id)}
                        >
                            Delete
                        </Button>
                    </Stack>
                </TodoItem>
            ))}
        </TodosContent>
    );
};

export default TodoList;
