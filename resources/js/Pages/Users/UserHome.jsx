import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import BasicTable from "../../Components/BasicTable";
import DeleteModal from "../../Components/DeleteModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function UserHome({ users }) {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setDeleteModalOpen(false);
        setSelectedUser(null);
    };

    const handleConfirmDelete = () => {
        router.delete(`/users/${selectedUser.id}`);
        handleCloseModal();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Link href="/users/create">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: "1rem" }}
                >
                    Add User
                </Button>
            </Link>
            <BasicTable
                rows={users}
                headers={["name", "email"]}
                actions={(row, index) => (
                    <Stack direction="row" spacing={1}>
                        <Tooltip title="View">
                            <Link href={`/users/${row.id}`}>
                                <IconButton color="info" size="small">
                                    <RemoveRedEyeIcon />
                                </IconButton>
                            </Link>
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
            <DeleteModal
                open={deleteModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                itemName={selectedUser?.name}
            />
        </Box>
    );
}

UserHome.layout = (page) => <Layout>{page}</Layout>;
