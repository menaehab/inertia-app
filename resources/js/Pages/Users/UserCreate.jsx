import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import { router, useForm } from "@inertiajs/react";
import {
    TextField,
    Button,
    Box,
    Card,
    CardContent,
    CardActions,
    Stack,
    Alert,
    IconButton,
    InputAdornment,
    LinearProgress,
    Typography,
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Save as SaveIcon,
    Cancel as CancelIcon,
} from "@mui/icons-material";

export default function UserCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/users");
    };

    const handleCancel = () => {
        router.visit("/users");
    };

    // Get password strength
    const getPasswordStrength = () => {
        const { password } = data;
        if (!password) return { value: 0, label: "", color: "error" };

        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (password.length >= 12) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 12.5;
        if (/[^A-Za-z0-9]/.test(password)) strength += 12.5;

        if (strength < 40) return { value: strength, label: "Weak", color: "error" };
        if (strength < 70) return { value: strength, label: "Medium", color: "warning" };
        return { value: strength, label: "Strong", color: "success" };
    };

    const passwordStrength = getPasswordStrength();

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                        p: 3,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                        }}
                    >
                        Create A New User
                    </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>

                    {processing && <LinearProgress sx={{ mb: 2 }} />}

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                placeholder="Enter full name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                error={!!errors.name}
                                helperText={errors.name}
                                disabled={processing}
                            />

                            <TextField
                                required
                                fullWidth
                                type="email"
                                label="Email"
                                placeholder="Enter email address"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                                disabled={processing}
                            />

                            <Box>
                                <TextField
                                    required
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    label="Password"
                                    placeholder="Enter password"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    disabled={processing}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    disabled={processing}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {data.password && (
                                    <Box sx={{ mt: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={passwordStrength.value}
                                                color={passwordStrength.color}
                                                sx={{ flexGrow: 1, height: 6, borderRadius: 1 }}
                                            />
                                            <Typography variant="caption" color={`${passwordStrength.color}.main`}>
                                                {passwordStrength.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                            </Box>

                            <TextField
                                required
                                fullWidth
                                type={showPasswordConfirmation ? "text" : "password"}
                                label="Password Confirmation"
                                placeholder="Re-enter password"
                                value={data.password_confirmation}
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                                error={!!errors.password_confirmation}
                                helperText={errors.password_confirmation}
                                disabled={processing}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPasswordConfirmation(!showPasswordConfirmation)
                                                }
                                                edge="end"
                                                disabled={processing}
                                            >
                                                {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {data.password && data.password_confirmation && data.password === data.password_confirmation && (
                                <Alert severity="success">Passwords match!</Alert>
                            )}
                        </Stack>
                    </form>
                </CardContent>

                <CardActions sx={{ justifyContent: "flex-end", px: 4, pb: 3, pt: 2, gap: 1.5 }}>
                    <Button
                        variant="outlined"
                        startIcon={<CancelIcon />}
                        onClick={handleCancel}
                        disabled={processing}
                        sx={{
                            textTransform: "none",
                            fontWeight: 600,
                            px: 3,
                            borderColor: "divider",
                            color: "text.secondary",
                            "&:hover": {
                                borderColor: "text.secondary",
                                backgroundColor: "action.hover",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={handleSubmit}
                        disabled={processing}
                        sx={{
                            background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                            textTransform: "none",
                            fontWeight: 700,
                            px: 4,
                            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                                boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
                            },
                            "&:disabled": {
                                background: "rgba(0, 0, 0, 0.12)",
                            },
                        }}
                    >
                        {processing ? "Creating..." : "Create User"}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

UserCreate.layout = (page) => <Layout children={page} />;
