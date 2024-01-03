import React, { useEffect, useState } from "react";
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
import "./font.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const selectUserLoggedInStatus = (state) => 
   state
;

const Navbar = () => {
    const [value, setValue] = useState();
    const [search, setSearch] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchPhone = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

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

    const ProfileImage = () => { 
        return (<img className="w-10 mx-5 rounded-full cursor-pointer" onClick={navigateToLoginPage} src={useSelector(selectUserLoggedInStatus).auth.user.data?.ProfileImage || "https://i.pinimg.com/736x/73/17/a5/7317a548844e0d0cccd211002e0abc45.jpg"} />)
    }

    const navigateToLoginPage = () => {
        navigate("/signin");
    }

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
                                    backgroundColor: "#2b2a29",
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
                            <ProfileImage />
                        </>
                    ) : (
                        <>
                            <Typography sx={{ fontSize: "2rem", fontFamily: 'FF_MARK_FONT' }}>Scoop</Typography>
                            <Button
                                onClick={handleMenuOpen}
                                sx={{
                                    color: "#999999",
                                    textTransform: "none",
                                    fontSize: "1.05rem",
                                    marginLeft: "40px", 
                                    fontFamily: 'FF_MARK_FONT'
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
                                sx={{ marginLeft: "10px", fontFamily: 'FF_MARK_FONT' }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab sx = {{fontFamily: 'FF_MARK_FONT'}}label="Contact Us" />
                                <Tab sx={{fontFamily: 'FF_MARK_FONT'}} label="About Us" />
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
                                    backgroundColor: "#2b2a29",
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
                                   style: { color: 'white' },
                                }}
                            />
                            {/* {<Avatar sx={{ marginLeft: "10px", fontFamily: 'FF_MARK_FONT'     }}>P</Avatar> */}
                            <ProfileImage />
                        </>
                    )}


                    <Typography className="cursor-pointer" onClick={navigateToLoginPage} sx={{ marginLeft: "5px", color: "white", fontFamily: 'FF_MARK_FONT' }}>
                        {
                            useSelector(selectUserLoggedInStatus).auth.user.data?.UserName || "Login"
                        }
                    </Typography>
                   
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;
