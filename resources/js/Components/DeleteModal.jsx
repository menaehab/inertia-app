import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    p: 0,
    overflow: "hidden",
};

export default function DeleteModal({ open, onClose, onConfirm, itemName }) {
    return (
        <Modal
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
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
                            background: "linear-gradient(135deg, #d32f2f 0%, #f44336 100%)",
                            p: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >

                        <Typography
                            id="delete-modal-title"
                            variant="h5"
                            component="h2"
                            sx={{
                                color: "white",
                                fontWeight: 600,
                                letterSpacing: "0.5px",
                            }}
                        >
                            Confirm Deletion
                        </Typography>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                        <Typography
                            id="delete-modal-description"
                            sx={{
                                mb: 3,
                                color: "text.secondary",
                                fontSize: "1rem",
                                lineHeight: 1.6,
                            }}
                        >
                            Are you sure you want to delete{" "}
                            {itemName && (
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 600,
                                        color: "text.primary",
                                    }}
                                >
                                    "{itemName}"
                                </Box>
                            )}
                            {!itemName && (
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 600,
                                        color: "text.primary",
                                    }}
                                >
                                    this item
                                </Box>
                            )}
                            ? This action cannot be undone.
                        </Typography>

                        {/* Action buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 2,
                            }}
                        >
                            <Button
                                onClick={onClose}
                                variant="outlined"
                                sx={{
                                    borderColor: "divider",
                                    color: "text.secondary",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    px: 3,
                                    py: 1,
                                    "&:hover": {
                                        borderColor: "text.secondary",
                                        backgroundColor: "action.hover",
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={onConfirm}
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(135deg, #d32f2f 0%, #f44336 100%)",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1,
                                    boxShadow: "0 4px 12px rgba(211, 47, 47, 0.3)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #c62828 0%, #e53935 100%)",
                                        boxShadow: "0 6px 16px rgba(211, 47, 47, 0.4)",
                                    },
                                }}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
