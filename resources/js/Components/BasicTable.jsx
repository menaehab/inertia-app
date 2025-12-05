import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, headers, actions }) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
            }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
                <TableHead>
                    <TableRow
                        sx={{
                            background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                        }}
                    >
                        <TableCell
                            sx={{
                                fontWeight: 700,
                                color: "white",
                                fontSize: "0.875rem",
                                letterSpacing: "0.5px",
                                py: 2,
                            }}
                        >
                            #
                        </TableCell>
                        {headers.map((header) => (
                            <TableCell
                                key={header}
                                sx={{
                                    fontWeight: 700,
                                    color: "white",
                                    fontSize: "0.875rem",
                                    letterSpacing: "0.5px",
                                    py: 2,
                                }}
                            >
                                {header.charAt(0).toUpperCase() + header.slice(1)}
                            </TableCell>
                        ))}
                        <TableCell
                            sx={{
                                fontWeight: 700,
                                color: "white",
                                textAlign: "center",
                                fontSize: "0.875rem",
                                letterSpacing: "0.5px",
                                py: 2,
                            }}
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "rgba(0, 0, 0, 0.02)",
                                },
                                "&:hover": {
                                    backgroundColor: "rgba(25, 118, 210, 0.08)",
                                    transition: "background-color 0.3s ease",
                                },
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                sx={{
                                    fontWeight: 600,
                                    color: "text.secondary",
                                    fontSize: "0.875rem",
                                }}
                            >
                                {index + 1}
                            </TableCell>
                            {headers.map((header, idx) => (
                                <TableCell
                                    key={idx}
                                    sx={{
                                        fontSize: "0.875rem",
                                        color: "text.primary",
                                    }}
                                >
                                    {row[header]}
                                </TableCell>
                            ))}
                            <TableCell
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 1,
                                }}
                            >
                                {actions(row, index)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
