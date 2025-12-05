import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import { router, useForm } from "@inertiajs/react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    Stack,
    IconButton,
    InputAdornment,
    Alert,
    CardActions,
    Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import {
    Visibility,
    VisibilityOff,
    Save as SaveIcon,
    Cancel as CancelIcon,
} from "@mui/icons-material";

export default function UserEdit({ user }) {
    const { data, setData, processing, put, errors } = useForm({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    const handleCancel = () => {
        router.visit("/users");
    };

    const getPasswordStrength = () => {
        const { password } = data;
        if (!password) return { value: 0, label: "", color: "error" };

        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (password.length >= 12) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 12.5;
        if (/[^A-Za-z0-9]/.test(password)) strength += 12.5;

        if (strength < 40)
            return { value: strength, label: "Weak", color: "error" };
        if (strength < 70)
            return { value: strength, label: "Medium", color: "warning" };
        return { value: strength, label: "Strong", color: "success" };
    };

    const passwordStrength = getPasswordStrength();
    return (
        <>
            <Box sx={{ maxWidth: "600px", mx: "auto", p: 3 }}>
                <Card elevation={3}>
                    <CardContent>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{ mb: 3 }}
                        >
                            Edit User
                        </Typography>
                        {processing && <LinearProgress sx={{ mb: 2 }} />}
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    placeholder="Enter full name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    disabled={processing}
                                />
                                <Box>
                                    <TextField
                                        fullWidth
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        label="Password"
                                        placeholder="Leave blank to keep current password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        error={!!errors.password}
                                        helperText={errors.password}
                                        disabled={processing}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword
                                                            )
                                                        }
                                                        edge="end"
                                                        disabled={processing}
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {data.password && (
                                        <Box sx={{ mt: 1 }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={
                                                        passwordStrength.value
                                                    }
                                                    color={
                                                        passwordStrength.color
                                                    }
                                                    sx={{
                                                        flexGrow: 1,
                                                        height: 6,
                                                        borderRadius: 1,
                                                    }}
                                                />
                                                <Typography
                                                    variant="caption"
                                                    color={`${passwordStrength.color}.main`}
                                                >
                                                    {passwordStrength.label}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    )}
                                </Box>

                                <TextField
                                    fullWidth
                                    type={
                                        showPasswordConfirmation
                                            ? "text"
                                            : "password"
                                    }
                                    label="Password Confirmation"
                                    placeholder="Re-enter password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    error={!!errors.password_confirmation}
                                    helperText={errors.password_confirmation}
                                    disabled={processing}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() =>
                                                        setShowPasswordConfirmation(
                                                            !showPasswordConfirmation
                                                        )
                                                    }
                                                    edge="end"
                                                    disabled={processing}
                                                >
                                                    {showPasswordConfirmation ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {data.password &&
                                    data.password_confirmation &&
                                    data.password ===
                                        data.password_confirmation && (
                                        <Alert severity="success">
                                            Passwords match!
                                        </Alert>
                                    )}
                            </Stack>
                        </form>
                    </CardContent>
                    <CardActions
                        sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            onClick={handleCancel}
                            disabled={processing}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleSubmit}
                            disabled={processing}
                        >
                            {processing ? "Updating..." : "Update User"}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
UserEdit.layout = (page) => <Layout children={page} />;
