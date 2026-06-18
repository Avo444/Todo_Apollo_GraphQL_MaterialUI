import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ApolloProvider } from "@apollo/client/react";
import { RouterProvider } from "react-router-dom";

import { client } from "./app/api/client";
import { theme } from "./app/theme/theme";
import { AppRouter } from "./app/router/AppRouter";

import "./app/styles/style.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={AppRouter} />
            </ThemeProvider>
        </ApolloProvider>
    </StrictMode>,
);
