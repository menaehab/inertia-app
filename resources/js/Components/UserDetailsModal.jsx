import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    p: 0,
    overflow: "hidden",
};

export default function UserDetailsModal({ open, onClose, user }) {
    if (!user) return null;

    return (
        <Modal
            aria-labelledby="user-details-modal-title"
            aria-describedby="user-details-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade,
                    sx: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    {/* Header with gradient background */}
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                            p: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 60,
                                height: 60,
                                bgcolor: "rgba(255, 255, 255, 0.3)",
                                color: "white",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                            }}
                        >
                            {user.name?.charAt(0).toUpperCase()}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                id="user-details-modal-title"
                                variant="h5"
                                component="h2"
                                sx={{
                                    color: "white",
                                    fontWeight: 600,
                                    letterSpacing: "0.5px",
                                    mb: 0.5,
                                }}
                            >
                                User Details
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(255, 255, 255, 0.9)",
                                    fontSize: "0.875rem",
                                }}
                            >
                                View complete user information
                            </Typography>
                        </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                        {/* User Info Section */}
                        <Box sx={{ mb: 3 }}>
                            {/* Name Field */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 2,
                                    mb: 2.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(25, 118, 210, 0.1)",
                                        borderRadius: "50%",
                                        width: 40,
                                        height: 40,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <PersonIcon
                                        sx={{ color: "#1976d2", fontSize: 20 }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "0.75rem",
                                            color: "text.secondary",
                                            mb: 0.5,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Name
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "1rem",
                                            color: "text.primary",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {user.name}
                                    </Typography>
                                </Box>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            {/* Email Field */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(25, 118, 210, 0.1)",
                                        borderRadius: "50%",
                                        width: 40,
                                        height: 40,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <EmailIcon
                                        sx={{ color: "#1976d2", fontSize: 20 }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "0.75rem",
                                            color: "text.secondary",
                                            mb: 0.5,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Email
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "1rem",
                                            color: "text.primary",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {user.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Action button */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 3,
                            }}
                        >
                            <Button
                                onClick={onClose}
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1,
                                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                                        boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
                                    },
                                }}
                            >
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
