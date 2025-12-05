import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import BasicTable from "../../Components/BasicTable";
import DeleteModal from "../../Components/DeleteModal";
import UserDetailsModal from "../../Components/UserDetailsModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function UserHome({ users }) {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleViewClick = (user) => {
        setSelectedUser(user);
        setDetailsModalOpen(true);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedUser(null);
    };

    const handleCloseDetailsModal = () => {
        setDetailsModalOpen(false);
        setSelectedUser(null);
    };

    const handleConfirmDelete = () => {
        router.delete(`/users/${selectedUser.id}`);
        handleCloseDeleteModal();
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Page Header */}
            <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        color: "text.primary",
                    }}
                >
                    Users Management
                </Typography>
                <Link href="/users/create">
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
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
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Add User
                    </Button>
                </Link>
            </Box>
            <BasicTable
                rows={users}
                headers={["name", "email"]}
                actions={(row, index) => (
                    <Stack direction="row" spacing={1}>
                        <Tooltip title="View">
                            <IconButton
                                color="info"
                                size="small"
                                onClick={() => handleViewClick(row)}
                            >
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                            <Link href={`/users/${row.id}/edit`}>
                                <IconButton color="warning" size="small">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton
                                color="error"
                                size="small"
                                onClick={() => handleDeleteClick(row)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                )}
            />
            <UserDetailsModal
                open={detailsModalOpen}
                onClose={handleCloseDetailsModal}
                user={selectedUser}
            />
            <DeleteModal
                open={deleteModalOpen}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
                itemName={selectedUser?.name}
            />
        </Box>
    );
}

UserHome.layout = (page) => <Layout>{page}</Layout>;
