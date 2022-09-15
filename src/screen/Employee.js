import React from "react";
import "./employee.css";
import "../popup.css";
import { BootstrapButton, AtsTextField } from "./employeeCss.js";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import StartIcon from "@mui/icons-material/Start";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { Grid, Dialog, Slide } from "@mui/material";
import { EmployeeForm } from "./employeeForm";


const Employee = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const navigate = useNavigate();


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
 const handleClose =() => {
    setOpen(false);
  }

   const handleClosed={
    handleClose : () => {
      setOpen(false);
    },
   handleFullWidthChange :() => {
    setMaxWidth('lg');
  },
    handleCancel :() => {
      var alert = window.confirm("Are you sure you want to Cancel?");
  
      if (alert === true) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    },
  
    formikSubmit:()=>{
      var alert = window.confirm("Employee details added Successfully");
  
      if (alert === true) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }

  }

  const Logout = () => {
    if (window.confirm("Do you want to Logout?")) {
      navigate("/");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <Grid container>
        <Grid
          md={6.5}
          xs={5}
          sx={{ fontSize: 10 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <h1>Employee Details</h1>
        </Grid>

        <Grid
          md={3}
          xs={3}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
        >
          <AtsTextField
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <FilterListIcon sx={{ color: "black", cursor: "pointer" }} />
        </Grid>

        <Grid
          md={2.5}
          xs={4}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
        >
          <BootstrapButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            AddEmployee
          </BootstrapButton>
          <StartIcon
            sx={{ color: "black", cursor: "pointer" }}
            onClick={Logout}
          />
        </Grid>
      </Grid>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <EmployeeForm handleClosed={handleClosed}   />
      </Dialog>
      
    </>
  );
}
   


export default Employee;
