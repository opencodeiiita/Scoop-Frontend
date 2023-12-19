import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Avatar,
    useMediaQuery,
    useTheme,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DrawerComp from "./Drawer";

const Navbar = () => {
    const [value, setValue] = useState();
    const [search, setSearch] = useState("");
    const [anchorEl, setAnchorEl] = useState(null); // Added missing state

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchPhone = useMediaQuery(theme.breakpoints.down("sm"));

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleCategorySelect = (category) => {
        // Add your logic for handling category selection
        console.log(`Selected category: ${category}`);
        handleMenuClose();
    };

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#000000" }}>
                <Toolbar>
                    {isMatchPhone ? (
                        <>
                            <DrawerComp />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                <Avatar sx={{ marginLeft: "10px" }}>P</Avatar>
                            </Box>
                        </>
                    ) : isMatch ? (
                        <>
                            <DrawerComp />
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "3%", marginRight: "10px" }}>
                                MEGA.news
                            </Typography>

                            <TextField
                                id="search-bar"
                                className="text"
                                variant="outlined"
                                placeholder="Search..."
                                size="small"
                                sx={{
                                    width: 350,
                                    margin: "10px auto",
                                    marginRight: "10px",
                                    color: "white",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                }}
                                value={search}
                                onChange={handleSearchChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon style={{ fill: "black" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Avatar sx={{ marginLeft: "10px" }}>P</Avatar>
                        </>
                    ) : (
                        <>
                            <Typography sx={{ fontSize: "2rem" }}>Scoop Logo</Typography>
                            <Button
                                onClick={handleMenuOpen}
                                sx={{
                                    color: "#999999",
                                    textTransform: "none",
                                    fontSize: "1.05rem",
                                    marginLeft: "40px"
                                }}
                            >
                                Categories <ArrowDropDownIcon />
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={() => handleCategorySelect("Category 1")}>
                                    Category 1
                                </MenuItem>
                                <MenuItem onClick={() => handleCategorySelect("Category 2")}>
                                    Category 2
                                </MenuItem>
                                <MenuItem onClick={() => handleCategorySelect("Category 3")}>
                                    Category 3
                                </MenuItem>
                            </Menu>
                            <Tabs
                                sx={{ marginLeft: "10px" }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="Contact Us" />
                                <Tab label="About Us" />
                            </Tabs>
                            <TextField
                                id="search-bar"
                                className="text"
                                variant="outlined"
                                placeholder="Search..."
                                size="small"
                                sx={{
                                    width: 350,
                                    margin: "10px auto",
                                    marginRight: "10px",
                                    color: "white",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                }}
                                value={search}
                                onChange={handleSearchChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon style={{ fill: "black" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Avatar sx={{ marginLeft: "10px" }}>P</Avatar>
                        </>
                    )}


                    <Typography sx={{ marginLeft: "5px", color: "white" }}>Behzad</Typography>
                    <Button
                        sx={{
                            marginLeft: "10px",
                            marginRight: 0,
                            backgroundColor: "transparent",
                        }}
                        variant="contained"
                        startIcon={<BookmarksIcon />}
                    ></Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;
