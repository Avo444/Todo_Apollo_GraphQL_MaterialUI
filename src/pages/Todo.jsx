import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Form, Block, TodoList, TodoBlock, CenterBlock } from "../components";

const Todo = () => {
    const [editTodo, setEditTodo] = useState(null);

    return (
        <Block>
            <Container>
                <CenterBlock>
                    <TodoBlock>
                        <Typography variant="h1">Todo</Typography>
                        <Form editTodo={editTodo} setEditTodo={setEditTodo} />
                        <TodoList setEditTodo={setEditTodo} />
                    </TodoBlock>
                </CenterBlock>
            </Container>
        </Block>
    );
};

export default Todo;
