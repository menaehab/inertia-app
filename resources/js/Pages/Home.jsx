import React from "react";
import Layout from "../Layouts/Layout";
import { Box, Typography, Card, CardContent, Button, Container, Grid } from "@mui/material";
import { router } from "@inertiajs/react";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { route } from "ziggy-js";
export default function Home() {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                    py: 10,
                    px: 3,
                    borderRadius: "20px",
                    mb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            mb: 2,
                            textAlign: "center",
                            letterSpacing: "1px",
                        }}
                    >
                        Welcome to Inertia App
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "rgba(255, 255, 255, 0.9)",
                            textAlign: "center",
                            fontWeight: 400,
                            maxWidth: 700,
                            mx: "auto",
                        }}
                    >
                        A modern, full-stack application built with Laravel and React
                    </Typography>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ pb: 8 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        mb: 4,
                        textAlign: "center",
                        color: "text.primary",
                    }}
                >
                    Get Started
                </Typography>
                <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 12px 40px rgba(25, 118, 210, 0.2)",
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 3,
                                    }}
                                >
                                    <PeopleIcon sx={{ color: "white", fontSize: 30 }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                >
                                    User Management
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 3,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Create, view, edit, and manage users with our intuitive interface. Full CRUD operations with modern design.
                                </Typography>
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={() => router.visit(route('users.index'))}
                                    sx={{
                                        background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                                        textTransform: "none",
                                        fontWeight: 600,
                                        px: 3,
                                        py: 1.5,
                                        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                                            boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
                                        },
                                    }}
                                >
                                    Manage Users
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

Home.layout = (page) => <Layout>{page}</Layout>;

