import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness7,
  Brightness4,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";

import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import { createSessionId, fetchToken, moviesApi } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";
const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();

  // const isAuthenticated = false;
  console.log(user);
  const token = localStorage.getItem("request_token");
  const sessionIdFromStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token && sessionIdFromStorage) {
        const { data: userData } = await moviesApi.get(
          `/account?session_id=${sessionIdFromStorage}`
        );
        dispatch(setUser(userData));
      } else {
        const sessionId = await createSessionId();

        const { data: userData } = await moviesApi.get(
          `/account?session_id=${sessionId}`
        );
        dispatch(setUser(userData));
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  {!isMobile && <>'My Movies' &nbsp;</>}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                    style={{ width: "30px", height: "30px" }}
                    className={classes.avatar}
                  />
                </Button>
              </>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
        º
      </div>
    </>
  );
};

export default NavBar;
