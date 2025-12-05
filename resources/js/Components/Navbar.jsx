import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { router } from "@inertiajs/react";
import { route } from "ziggy-js";
const pages = [
    {
        name: "Users",
        href: route("users.index"),
    },
];
const settings = ["Logout"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Navigation handler
    const navigate = (href) => {
        router.visit(href);
    };

    return (
        <AppBar
            position="static"
            sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                boxShadow: "0 4px 20px rgba(25, 118, 210, 0.25)",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "'Inter', 'Roboto', sans-serif",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            color: "white",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.02)",
                                textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                            },
                        }}
                    >
                        INERTIA APP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                "& .MuiPaper-root": {
                                    borderRadius: 2,
                                    mt: 1,
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.href);
                                    }}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "rgba(25, 118, 210, 0.08)",
                                        },
                                    }}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        onClick={() => navigate(route("home"))}
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "'Inter', 'Roboto', sans-serif",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            color: "white",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        INERTIA
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            gap: 1,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => navigate(page.href)}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    px: 2.5,
                                    borderRadius: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings" arrow>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{
                                    p: 0,
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            >
                                <Avatar
                                    alt="User"
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 0.2)",
                                        color: "white",
                                        fontWeight: 700,
                                        border: "2px solid white",
                                    }}
                                >
                                    M
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: "45px",
                                "& .MuiPaper-root": {
                                    borderRadius: 2,
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                                },
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                    sx={{
                                        minWidth: 120,
                                        "&:hover": {
                                            backgroundColor: "rgba(25, 118, 210, 0.08)",
                                        },
                                    }}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
