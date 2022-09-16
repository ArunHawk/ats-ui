import React,{useState} from "react";
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
import Data from "../component/data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "../App.css";
import { number } from "yup";



const Employee = () => {
  const [open, setOpen] = useState(false);
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

  const [data, setdata] = useState(Data);
  const [order, setorder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };

  const sortingNumber = (col) => {
    if (order === "ASC") {
      const numAscending = [...data].sort((a, b) => a.employeeid - b.employeeid);
      setdata(numAscending);
      setorder("DSC");
    }
    if (order === "DSC") {
      const numDescending = [...data].sort((a, b) =>  b.employeeid - a.employeeid);
      setdata(numDescending);
      
      setorder("ASC");
    }
  };

   const [search,setSearch] = useState("")
     

  

  return (
    <>
      <Grid container spacing={1}>
        <Grid item  xs={5} md={6.5}
          sx={{ fontSize: 10 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <h1>Employee Details</h1>
        </Grid>

        <Grid item xs={3}  md={3}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
        >
          <AtsTextField
            placeholder="Search"
            onChange={(e)=>setSearch(e.target.value)}
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






      <div>
        <Paper className="container">
          <Table className="Table">
            <TableHead>
              <TableRow>
                <TableCell numeric="left">
                  
                    <div className="tan">
                      <h4>Employee ID</h4>
                      <ImportExportIcon className="iconStyle" onClick={() => sortingNumber("employeeid")} />
                    </div>
                  
                </TableCell>

                <TableCell>
                  
                    <div className="tan">
                      <h4>Full Name</h4>
                      <ImportExportIcon className="iconStyle"  onClick={() => sorting("fullName")}/>
                    </div>
                  
                </TableCell>

                <TableCell>
                 
                    <div className="tan">
                      <h4>Designation</h4>
                      <ImportExportIcon className="iconStyle" onClick={() => sorting("designation")} />
                    </div>
                 
                </TableCell>

                <TableCell numeric="left">
                  <h4>Lead</h4>
                </TableCell>
                <TableCell numeric="left">
                  <h4>Manager</h4>
                </TableCell>
                <TableCell numeric="left">
                  <h4>Mobile</h4>
                </TableCell>
                <TableCell numeric="left">
                  <h4>Email id</h4>
                </TableCell>

                <TableCell numeric="left">
                  
                    <div className="tan">
                      <h4>Joining Data</h4>
                      <ImportExportIcon className="iconStyle" onClick={() => sorting("joiningData")} />
                    </div>
                
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              


            




            {data.filter((item)=>{
              
                  if(search===""){
                    return item
                  }else if(item.fullName.toLowerCase().includes(search.toLowerCase())){
                    return item
  
                  }else if(item.designation.toLowerCase().includes(search.toLowerCase())){
                    return item
                  
                  }else if(item.lead.toLowerCase().includes(search.toLowerCase())){
                    return item
                  }else if(item.manager.toLowerCase().includes(search.toLowerCase())){
                    return item
                  
                  } else if(item.joiningData.includes(search)){
                    return item
                  }else if (item.emailId.includes(search)){
                    return item
                  }
            })
            .map((item) => (
                <TableRow key={item.employeeid}>
                  <TableCell numeric="left">
                    {" "}
                    <FiberManualRecordIcon
                      style={{
                        height: 11,
                        color: item.active ? "green" : "red",
                      }}
                    />{" "}
                    {item.employeeid}
                  </TableCell>
                  <TableCell numeric="left" style={{ fontWeight: "bold" }}>
                    {item.fullName}
                  </TableCell>
                  <TableCell>{item.designation}</TableCell>
                  <TableCell>{item.lead}</TableCell>
                  <TableCell>{item.manager}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.emailId}</TableCell>
                  <TableCell>{item.joiningData}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>

      
    </>
  );
}
   


export default Employee;