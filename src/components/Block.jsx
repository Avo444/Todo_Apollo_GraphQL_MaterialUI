import { Box, Card, Stack } from "@mui/material";
import styled from "@emotion/styled";

export const Block = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
    minHeight: "100vh",
}));

export const CenterBlock = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const TodoBlock = styled(Card)(({ theme }) => ({
    width: "100%",
    height: 600,
    maxWidth: 500,
    borderRadius: 12,
    padding: theme.spacing(3),
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    display: "flex",
    flexDirection: "column",
    gap: 20,
}));

export const TodoForm = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
}));

export const TodoItem = styled(Card)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    padding: "10px",
    flexShrink: 0,
}));

export const TodosContent = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 600,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 10,
    flexShrink: 0,
}));
