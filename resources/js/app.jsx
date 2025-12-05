import "../css/app.css";
import "./bootstrap";
import { createInertiaApp, router } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "nprogress/nprogress.css";

const style = document.createElement('style');
style.textContent = `
    #nprogress .bar {
        background: #3f50b5 !important;
    }
    #nprogress .peg {
        box-shadow: 0 0 10px #3f50b5, 0 0 5px #3f50b5 !important;
    }
`;
document.head.appendChild(style);

const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App {...props} />
            </ThemeProvider>
        );
    },
});
