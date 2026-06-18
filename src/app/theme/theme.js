import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#9D6638",
            contrastText: "#4E220F",
        },
        secondary: {
            main: "#B0BA99",
        },
        background: {
            default: "#F7F1DE",
        },
    },
    typography: {
        fontFamily: "Raleway, Arial",
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 32,
                    textAlign: "center",
                    fontWeight: 700,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: "100%"
                },
            },
        },
    },
});
