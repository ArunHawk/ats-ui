import { AppBar, Toolbar } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import "../App.css";
import SideMenu from "./SideMenu";

function Header() {
  return (
    <>
      <div className="navbar">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideMenu />
          </Grid>

          <Grid item xs={10}>
            <AppBar position="static" style={{ width: "100%" }}>
              <Toolbar></Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Header;
