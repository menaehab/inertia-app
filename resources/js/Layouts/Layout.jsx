import React from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)",
            }}
        >
            <Navbar />
            <Box sx={{ maxWidth: "1400px", mx: "auto", py: 3 }}>
                {children}
            </Box>
        </Box>
    );
}
