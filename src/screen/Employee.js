import React, { useState } from "react";
import "./employee.css";
import "../popup.css";
import { BootstrapButton, AtsTextField } from "./employeeCss.js";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import "../style.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Dialog,
  Toolbar,
  Slide,
  Typography,
  Stack,
  IconButton,
  Box,
  MenuItem
 
} from "@mui/material";
import {
  Grid,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
} from "@mui/material";

import Data from "../component/data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StartIcon from "@mui/icons-material/Start";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as yup from "yup";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import "yup-phone";
import "../App.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Employee = () => {
  
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs());
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };
 
 
  const handleClosed = () => {
    var alert = window.confirm("Are you sure you want to Cancel?");

    if (alert === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      EmailId: "",
      MobileNumber: "",
      PanNumber: "",
      AadhaarNumber: "",
      address: "",
      year: "",
      month: "",
      maritalStatus:"",
      Department:"",
      emptype:"",
      dateOfJoing:"",
      desgination:"",
      location:"",
      empStatus:"",
      Gender:"",
      repManager:"",
      Lead:"",
      recruiter:""

    },
    validationSchema: yup.object({
      FirstName: yup
        .string()
        .required("Enter Employee FirstName")
        .min(3, "Alteast 3 Character")
        .max(20, "Maximum 20 Character"),
      LastName: yup
        .string()
        .required("Enter Employee LastName")
        .min(1, "Alteast 2 Character")
        .max(10, "Maximum 20 Character"),
      EmailId: yup.string().email().required("Enter Employee EmailId"),
      MobileNumber: yup
        .string()
        .phone()
        .required("Enter Employee MobileNumber"),
      PanNumber: yup.string().required("Enter Employee PanNumber").uppercase(),
      AadhaarNumber: yup
        .number()
        .required("Enter Employee AadhaarNumber")
        .min(10, "Must Have 12 Number"),
      address: yup.string().required("Enter address"),
      year: yup.number().required("Enter Year").min(4),
      month: yup.number().required("Enter Month").min(1).max(12),
      maritalStatus: yup.string().required(" Enter marital status"),
      Department: yup.string().required("Enter Department"),
      emptype: yup.string().required("Enter emptype"),
      dateOfJoing: yup.string().required("Enter dateOfJoing"),
      desgination: yup.string().required("Enter desgination"),
      location: yup.string().required("Enter Employee location"),
      empStatus: yup.string().required("Enter EmployeeStatus"),
      repManager: yup.string().required("Enter ReportManager"),
      Lead: yup.string().required("Enter Lead"),
      recruiter: yup.string().required("Enter Recruiter"),
      Gender:yup.string().required("Enter Gender"),
    }),
    onSubmit: (event) => {
     
      var alert = window.confirm("Employee details added Successfully");

      if (alert === true) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    },
  })

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
      const numAscending = [...data].sort(
        (a, b) => a.employeeid - b.employeeid
      );
      setdata(numAscending);
      setorder("DSC");
    }
    if (order === "DSC") {
      const numDescending = [...data].sort(
        (a, b) => b.employeeid - a.employeeid
      );
      setdata(numDescending);

      setorder("ASC");
    }
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={5}
          md={6.5}
          sx={{ fontSize: 10 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <h1>Employee Details</h1>
        </Grid>

        <Grid
          item
          xs={3}
          md={3}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
        >
          <AtsTextField
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
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
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
        <form onSubmit={formik.handleSubmit}>
     
           <div style={{backgroundColor:'#1565c0',height:'10'}}>
            <Grid position="static" style={{backgroundColor:'white',marginLeft:'12px'}}>
             <Toolbar >
               <Grid sx={{flexGrow:1}} >
                <Chip label="employee" color="primary"/>
               </Grid>
               <IconButton
                       edge="end"
                       color="inherit"
                       aria-label="close"
                       onClick={() => {
                        maxWidth === "md"
                          ? setMaxWidth("lg")
                          : setMaxWidth("md");
                      }}
                       sx={{mr:1}}
                       style={{ color: "black" }}>
                       <OpenInFullIcon />
                     </IconButton>
                     <IconButton
                       edge="end"
                       color="inherit"
                       aria-label="close"
                       style={{ color: "black" }}
                       onClick={()=>{
                         setOpen(false)
                       }}
                     >
                       <CloseIcon />
                     </IconButton>
             </Toolbar>
             <div style={{marginTop:'-22px'}} >
             <Toolbar>
               <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                 Add Employee
               </Typography>
               <Button variant="contained" sx={{mr:2}}  
                onClick={handleClosed}
               >
                           Cancel
                         </Button>
                         <Button
                           type="submit"
                           variant="contained"
                           startIcon={<SaveIcon fontSize="small" />}>
                           Save
                         </Button>
             </Toolbar>
             </div>
           </Grid>
           </div>
           <Divider/>
          
          
           <Typography gutterBottom>
            <Grid sx={{ pt: 2, pl: 3, pr: 3, pb: 3 }} container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Basic Information
                  </Typography>
                  <Divider/>
                  <Grid sx={{ pt: 2 }} container spacing={2}>
                    <Grid item xs={8}>
                      <TextField
                        label="Employee Id"
                        name="EmployeeId"
                        value="65120"
                        variant="outlined"
                        size="small"
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="First Name"
                        name="FirstName"
                        value={formik.values.FirstName}
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                      ></TextField>
                      {formik.errors.FirstName || formik.touched.FirstName ? (
                        <span className="span"> {formik.errors.FirstName}</span>
                      ) : null}
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        name="LastName"
                        value={formik.values.LastName}
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                      ></TextField>
                      {formik.errors.LastName && formik.touched.LastName ? (
                        <span className="span">{formik.errors.LastName}</span>
                      ) : null}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email ID"
                        name="EmailId"
                        value={formik.values.EmailId}
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                        fullWidth
                      ></TextField>
                      {formik.errors.EmailId || formik.touched.EmailId ? (
                        <span className="span">{formik.errors.EmailId}</span>
                      ) : null}
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        onInput = {(e) =>{
                          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                      }}
                        label="Mobile Number"
                        type="number"
                        name="MobileNumber"
                        value={formik.values.MobileNumber}
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                      ></TextField>
                      {formik.errors.MobileNumber &&
                      formik.touched.MobileNumber ? (
                        <span className="span">
                          {formik.errors.MobileNumber}
                        </span>
                      ) : null}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
               <Grid item xs={4}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Personal Details
                  </Typography>
                  <Divider/>
                  <Grid sx={{ pt: 2 }} container spacing={2}>
                    <Grid item xs={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          views={["day"]}
                          label="Date Of Birth"
                          size="small"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              size="small"
                              {...params}
                              helperText={null}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                        Marital Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="maritalStatus"
                         value={formik.values.maritalStatus}
                          label="Material Status"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem  name="maritalStatus" value={1}>Single</MenuItem>
                          <MenuItem name="maritalStatus" value={2}>Married</MenuItem>
                        </Select>
                        {formik.errors.maritalStatus || formik.touched.maritalStatus ? (
                        <span className="span">{formik.errors.maritalStatus}</span>
                      ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} size="small">
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="Gender"
                        value={formik.values.Gender}
                        onChange={formik.handleChange}
                      >
                        <FormControlLabel
                          name="Gender"
                          value="female"
                          control={<Radio size="small" />}
                          label="Female"
                        />
                        <FormControlLabel
                          name="Gender"
                          value="male"
                          control={<Radio size="small"  />}
                          label="Male"
                        />
                        <FormControlLabel
                          name="Gender"
                          value="other"
                          control={<Radio size="small" />}
                          label="Other"
                        />
                      </RadioGroup>
                      {formik.errors.Gender || formik.touched.Gender  ? (
                        <span className="span">{formik.errors.Gender }</span>
                      ) : null}
                      <TextField
                        name="address"
                        value={formik.values.address}
                        label="Address"
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                        fullWidth
                      ></TextField>
                      {formik.errors.address || formik.touched.address ? (
                        <span className="span">{formik.errors.address}</span>
                      ) : null}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
               <Grid item xs={4}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Identity Information
                  </Typography>
                  <Divider/>
                  <Grid sx={{ pt: 2 }} container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="PanCardNumber"
                        type="text"
                        name="PanNumber"
                        value={formik.values.PanNumber}
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={formik.handleChange}
                      ></TextField>
                      {formik.errors.PanNumber && formik.touched.PanNumber ? (
                        <span className="span">{formik.errors.PanNumber}</span>
                      ) : null}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Aadhaar Number"
                        type="number"
                        name="AadhaarNumber"
                        value={formik.values.AadhaarNumber}
                        onInput = {(e) =>{
                          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
                      }}
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={formik.handleChange}
                      ></TextField>
                      {formik.errors.AadhaarNumber &&
                      formik.touched.AadhaarNumber ? (
                        <span className="span">
                          {formik.errors.AadhaarNumber}
                        </span>
                      ) : null}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Work Information
                  </Typography>
                  <Divider/>
                  <Grid sx={{ pt: 2 }} container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                          Department
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='Department'
                          value={formik.values.Department}
                          label="Department"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem name='Department' value="Management">Management</MenuItem>
                          <MenuItem name='Department'value="Production">Production</MenuItem>
                        </Select>
                        {formik.errors.Department || formik.touched.Department ? (
                        <span className="span">{formik.errors.Department}</span>
                      ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                          Employment Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='emptype'
                          value={formik.values.emptype}
                          label="Employeement Type"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem name='emptype' value="Full Time">Full Time</MenuItem>
                          <MenuItem name='emptype' value="Part Time">Part Time</MenuItem>
                        </Select>
                        {formik.errors.emptype || formik.touched.emptype ? (
                        <span className="span">{formik.errors.emptype}</span>
                      ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          views={["day"]}
                          label="Date Of Joining"
                          size="small"
                          value={value}
                          disablePast
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              size="small"
                              {...params}
                              helperText={null}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                          Designation
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="desgination"
                          value={formik.values.desgination}
                          label="Designation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem name="desgination" value="Manager">Manager</MenuItem>
                          <MenuItem name="desgination" value="HR">HR</MenuItem>
                          <MenuItem name="desgination" value="Trainer">Trainer</MenuItem>
                        </Select>
                        {formik.errors.desgination || formik.touched.desgination? (
                        <span className="span">{formik.errors.desgination}</span>
                      ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                          Employee Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='empStatus'
                          value={formik.values.empStatus}
                          label="Employee Status"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem  name='empStatus' value="Worker">Worker</MenuItem>
                          <MenuItem   name='empStatus' value="Self-Employed">Self-Employed</MenuItem>
                        </Select>
                        {formik.errors.empStatus || formik.touched.empStatus ? (
                        <span className="span">{formik.errors.empStatus}</span>
                      ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}></Grid>

                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
                          Location
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="location"
                          value={formik.values.location}
                          label="Designation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem name="location" value="Coimbatore">Coimbatore</MenuItem>
                          <MenuItem name="location" value="Chennai">Chennai</MenuItem>
                        </Select>
                        {formik.errors.location || formik.touched.location ? (
                        <span className="span">{formik.errors.location}</span>
                      ) : null}
                      </FormControl>
                    </Grid>

                    <Grid xs={4}>
                      <div className="Exprience">
                        <div className="left1">
                          {" "}
                          <TextField
                            label="Year(s)"
                            name="year"
                            value={formik.values.year}
                            type="number"
                            variant="outlined"
                            size="small"
                            onInput = {(e) =>{
                              e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
                          }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></TextField>
                          {formik.errors.year && formik.touched.year ? (
                            <span className="span">{formik.errors.year}</span>
                          ) : null}
                        </div>
                        <div className="right1">
                          {" "}
                          <TextField
                            onInput = {(e) =>{
                              e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                          }}
                            label="Month(s)"
                            type="number"
                            name="month"
                            value={formik.values.month}
                            variant="outlined"
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></TextField>
                          {formik.errors.month && formik.touched.month ? (
                            <span className="span">{formik.errors.month}</span>
                          ) : null}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Hieranchy Information
                  </Typography>
                  <Divider/>
                  <Stack sx={{ pt: 2 }} spacing={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Reporting Manager
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="repManager"
                         value={formik.values.repManager}
                        label="Reporting Manager"
                        onChange={formik.handleChange}
                        size="small"
                      >
                        <MenuItem name="repManager" value="Arun">Arun</MenuItem>
                        <MenuItem name="repManager" value="Kunalan">Kunalan</MenuItem>
                      </Select>
                      {formik.errors.repManager || formik.touched.repManager ? (
                        <span className="span">{formik.errors.repManager}</span>
                      ) : null}
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Lead
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='Lead'
                         value={formik.values.Lead}
                        label="Lead"
                        onChange={formik.handleChange}
                        size="small"
                      >
                        <MenuItem name='Lead' value="Titus">Titus</MenuItem>
                        <MenuItem name='Lead' value="Janani">Janani</MenuItem>
                      </Select>
                      {formik.errors.Lead|| formik.touched.Lead ? (
                        <span className="span">{formik.errors.Lead}</span>
                      ) : null}
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Recruiter
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="recruiter"
                        value={formik.values.recruiter}
                        label="Recruiter"
                        onChange={formik.handleChange}
                        size="small"
                      >
                        <MenuItem  name="recruiter" value="Sumithra">Sumithra</MenuItem>
                        <MenuItem   name="recruiter" value="Raj">Raj</MenuItem>
                      </Select>
                      {formik.errors.recruiter || formik.touched.recruiter ? (
                        <span className="span">{formik.errors.recruiter}</span>
                      ) : null}
                    </FormControl>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Typography>
           </form>
      </Dialog>

      <div>
        <Paper className="container">
          <Table className="Table">
            <TableHead>
              <TableRow>
                <TableCell numeric="left">
                  <div className="tan">
                    <h4>Employee ID</h4>
                    <ImportExportIcon
                      className="iconStyle"
                      onClick={() => sortingNumber("employeeid")}
                    />
                  </div>
                </TableCell>

                <TableCell>
                  <div className="tan">
                    <h4>Full Name</h4>
                    <ImportExportIcon
                      className="iconStyle"
                      onClick={() => sorting("fullName")}
                    />
                  </div>
                </TableCell>

                <TableCell>
                  <div className="tan">
                    <h4>Designation</h4>
                    <ImportExportIcon
                      className="iconStyle"
                      onClick={() => sorting("designation")}
                    />
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
                    <ImportExportIcon
                      className="iconStyle"
                      onClick={() => sorting("joiningData")}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.fullName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.designation
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.lead.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.manager.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (item.joiningData.includes(search)) {
                    return item;
                  } else if (item.emailId.includes(search)) {
                    return item;
                  } else if (
                    item.employeeid.toString().includes(search.toString())
                  ) {
                    return item;
                  } else if (
                    item.mobile.toString().includes(search.toString())
                  ) {
                    return item;
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
};

export default Employee;
