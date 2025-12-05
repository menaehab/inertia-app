import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, headers, actions }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
                        {headers.map((header) => (
                            <TableCell key={header} sx={{ fontWeight: "bold" }}>
                                {header.charAt(0).toUpperCase() + header.slice(1)}
                            </TableCell>
                        ))}
                        <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.id}
                            hover
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{index + 1}</TableCell>
                            {headers.map((header, idx) => (
                                <TableCell key={idx}>{row[header]}</TableCell>
                            ))}
                            <TableCell sx={{ display: "flex", justifyContent: "center" }}>{actions(row, index)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
