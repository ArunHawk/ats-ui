import React from "react";
import { styled } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DescriptionIcon from "@mui/icons-material/Description";
import BadgeIcon from "@mui/icons-material/Badge";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import logo from "../assert/logo.png";
import D from "../assert/D.png";
import C from "../assert/C.png";
import DR from "../assert/DR.png";
import M from "../assert/M.png";
import R from "../assert/R.png";
import S from "../assert/S.png";
import T from "../assert/T.png";
import {
  Typography,
  Toolbar,
  Grid,
  List,
  CssBaseline,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  Avatar,
  ListItemIcon,
  Collapse,
  Divider,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import TableList from "./Table";
import AddressBar from "./AddressBar";
import Popover from "@mui/material/Popover";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Userlogo from "./avatar";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: "rgb(237,242,246)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  background: "rgb(237,242,246)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

{
  /*
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
})); 
*/
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSubmission(false);
    setOpening(false);
  };

  const [opening, setOpening] = React.useState(false);

  const handleClick = () => {
    setOpening(!opening);
    setSubmission(false);
  };
  const [submission, setSubmission] = React.useState(false);

  const handleSubmission = () => {
    setSubmission(!submission);
    setOpening(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography variant="h4" noWrap component="div">
              <img src={logo} alt="ATS" />
            </Typography>
          </Grid>
          <Grid item xs={1} >
            <Userlogo/>
          </Grid>
        </Grid>
      </AppBar>
      <div className="pos">
        <Drawer variant="permanent" open={open}>
          <List>
            <ListItem disablePadding sx={{ display: "block", marginTop:5 }}>
              

              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={D} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={C} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Candidate"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={DR} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Demand Report"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={M} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Master Page"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={R} alt="ATS" />
                </ListItemIcon>
                <ListItemText primary="Report" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleSubmission}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={S} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Submission Report"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>{" "}
            <Collapse in={submission} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ForwardToInboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="File Submission" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Work Submit" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <BadgeIcon />
                  </ListItemIcon>
                  <ListItemText primary="EmployeeSubmit" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={T} alt="ATS" />
                </ListItemIcon>
                <ListItemText
                  primary="Team Management"
                  sx={{ opacity: open ? 1 : 0 }}
                  style={{ textSizeAdjust: "auto" }}
                />
              </ListItemButton>
            </ListItem>
            <Collapse in={opening} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  
                  <ListItemIcon>
                  
                    <PersonAddIcon  />
                    
                  </ListItemIcon>
                  
                  <ListItemText primary="Add Employee" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon>
                  <ListItemText primary="Assignment" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SupervisedUserCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Assign Employee" />
                </ListItemButton>
              </List>
            </Collapse>
            {/* Team Management */}
          </List>

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="close drawer"
              edge="end"
              onClick={handleDrawerClose}
            >
              <KeyboardDoubleArrowLeftIcon />
            </IconButton>
          </Toolbar>
        </Drawer>
      </div>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <br></br> 
        <br></br>
        <AddressBar />
        <Divider />
    
        <TableList />
      </Box>
    </Box>
  );
}
