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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DrawerComp from "./Drawer";

const Navbar = () => {
  const [value, setValue] = useState();
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchChange = (event) => {
      setSearch(event.target.value);
  };

  return (
      <React.Fragment>
          <AppBar sx={{ background: "#063970" }}>
              <Toolbar>
                {isMatchPhone ? (
                    null
                ) : (
                    isMatch ? (
                        <>
                            <DrawerComp />
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                               MEGA.news
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                               Scoop Logo
                            </Typography>
                            <Tabs
                               sx={{ marginLeft: "auto" }}
                               indicatorColor="secondary"
                               textColor="inherit"
                               value={value}
                               onChange={(e, value) => setValue(value)}
                            >
                               <Tab label="Categories" IconComponent={() => <ArrowDropDownIcon />} />
                               <Tab label="Contact Us" />
                               <Tab label="About Us" />
                            </Tabs>
                        </>
                    )
                )}
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
                <Button sx={{ marginLeft: 0, marginRight: 0 }} variant="contained">
                    Profile
                </Button>
                <Button sx={{ marginLeft: "10px", marginRight: 0 }} variant="contained" startIcon={<BookmarksIcon />}>
                </Button>
              </Toolbar>
          </AppBar>
      </React.Fragment>
  );
};

export default Navbar;
