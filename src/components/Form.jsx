import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useMutation } from "@apollo/client/react";

import { useTodo } from "../hooks";
import { TodoForm } from "./index";
import { ALL_TODOS, CREATE_TODO, UPDATE_TODO } from "../graphql/graphql";

const Form = ({ editTodo, setEditTodo }) => {
    const { addTodoHandle } = useTodo();
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(editTodo ? editTodo.title : "");
    }, [editTodo]);

    return (
        <TodoForm
            component={"form"}
            onSubmit={(e) => addTodoHandle({ e, editTodo, setEditTodo, input })}
        >
            <TextField
                label="Todo"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" variant="contained">
                {editTodo ? "Save" : "Add"}
            </Button>
        </TodoForm>
    );
};

export default Form;
