import { Link } from "@inertiajs/react";
import React from "react";
import Layout from "../../Layouts/Layout";
import BasicTable from "../../Components/BasicTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function UserHome({ users }) {
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
                            <Link href={`/users/${row.id}`}>
                                <IconButton color="error" size="small">
                                    <DeleteIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </Stack>
                )}
            />
        </Box>
    );
}

UserHome.layout = (page) => <Layout>{page}</Layout>;
