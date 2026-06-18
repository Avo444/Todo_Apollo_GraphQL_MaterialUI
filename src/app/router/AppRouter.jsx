import { createBrowserRouter } from "react-router-dom";
import Todo from "../../pages/todo";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Todo />,
    },
]);
