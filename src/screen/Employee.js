import React from "react";
import "./employee.css";
import "../popup.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BootstrapButton, AtsTextField } from "./employeeCss.js";
import {
  Button,
  Dialog,
  Toolbar,
  Slide,
  Typography,
  Stack,
  IconButton,
  Box,
  MenuItem,
} from "@mui/material";
import {
  Grid,
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
import StartIcon from "@mui/icons-material/Start";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as yup from "yup";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import "yup-phone";
import "../style.css";
import { useNavigate } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Employee = () => {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const handleClickOpen = () => {
    setOpen(true);
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
      AadhaarNumber: "1234 5678 9010",
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
        .min(2, "Alteast 2 Character")
        .max(10, "Maximum 20 Character"),
      EmailId: yup.string().email().required("Enter Employee EmailId"),
      MobileNumber: yup
        .string()
        .phone()
        .required("Enter Employee MobileNumber"),
      PanNumber: yup.string().required("Enter Employee PanNumber"),
      AadhaarNumber: yup.number().required("Enter Employee AadhaarNumber"),
    }),
    // onSubmit:(value)=>{

    // }
  });
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
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
          <FilterListIcon sx={{ color: "black" }} />
        </Grid>

        <Grid
          md={2.5}
          xs={4}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
        >
          <BootstrapButton
            onClick={handleClickOpen}
            className="but"
            variant="contained"
            startIcon={<AddIcon />}
          >
            AddEmployee
          </BootstrapButton>
          <StartIcon sx={{ color: "black" }} onClick={Logout} />
        </Grid>
      </Grid>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar style={{ backgroundColor: "white" }} fullWidth>
          <Grid container>
            <Grid item xs={12}>
              <div className="qwerty">
                <div className="employeeName">
                  <Chip label="employee" color="primary" />
                </div>
                <div className="maxClose">
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={setMaxWidth}
                    aria-label="close"
                    style={{ color: "black" }}
                  >
                    <OpenInFullIcon />
                  </IconButton>

                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    style={{ color: "black" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="ytrewq">
                <div className="Heading">
                  <Typography
                    style={{ color: "black", fontWeight: 700 }}
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Add Employee
                  </Typography>
                  <div className="ButtonStyle">
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<SaveIcon fontSize="small" />}
                        onClick={formik.handleSubmit}
                      >
                        Save
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Toolbar>

        <Typography sx={{ m: 2 }} gutterBottom>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h8" style={{ fontWeight: 600 }}>
                  Basic Information
                </Typography>
                <hr></hr>
                <Grid container spacing={2}>
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
                    {formik.errors.EmailId && formik.touched.EmailId ? (
                      <span className="span">{formik.errors.EmailId}</span>
                    ) : null}
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      inputProps={{ minLength: 12 }}
                      label="Mobile Number"
                      type="number"
                      minlength="10"
                      name="MobileNumber"
                      EmailId
                      value={formik.values.MobileNumber}
                      variant="outlined"
                      size="small"
                      onChange={formik.handleChange}
                    ></TextField>
                    {formik.errors.MobileNumber &&
                    formik.touched.MobileNumber ? (
                      <span className="span">{formik.errors.MobileNumber}</span>
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
                <hr></hr>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="date"
                      label="Date Of Birth"
                      type="date"
                      defaultValue="2017-05-24"
                      size="small"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Material Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Material Status"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Single</MenuItem>
                        <MenuItem value={20}>Married</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} size="small">
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio size="small" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio size="small" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio size="small" />}
                        label="Other"
                      />
                    </RadioGroup>

                    <TextField
                      label="Address"
                      variant="outlined"
                      size="small"
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h8" style={{ fontWeight: 600 }}>
                  Identity Information
                </Typography>
                <hr></hr>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="PanCardNumber"
                      type="number"
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
                <hr></hr>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Department
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Department"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Management</MenuItem>
                        <MenuItem value={20}>Production</MenuItem>
                      </Select>
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
                        // value={age}
                        label="Employeement Type"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Full Time</MenuItem>
                        <MenuItem value={20}>Part Time</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="date"
                      label="Date Of Joining"
                      type="date"
                      defaultValue="2017-05-24"
                      size="small"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" size="small">
                        Designation
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Designation"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Manager</MenuItem>
                        <MenuItem value={20}>HR</MenuItem>
                        <MenuItem value={30}>Trainer</MenuItem>
                      </Select>
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
                        // value={age}
                        label="Employee Status"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Worker</MenuItem>
                        <MenuItem value={20}>Self-Employed</MenuItem>
                      </Select>
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
                        // value={age}
                        label="Designation"
                        // onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Coimbatore</MenuItem>
                        <MenuItem value={20}>Chennai</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid xs={4}>
                    <div className="Exprience">
                      <div className="left1">
                        {" "}
                        <TextField
                          label="Year(s)"
                          type="number"
                          variant="outlined"
                          size="small"
                          required
                        ></TextField>
                      </div>
                      <div className="right1">
                        {" "}
                        <TextField
                          label="Month(s)"
                          type="number"
                          variant="outlined"
                          size="small"
                          required
                        ></TextField>
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
                <hr></hr>
                <Stack spacing={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size="small">
                      Reporting Manager
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Reporting Manager"
                      // onChange={handleChange}
                      size="small"
                    >
                      <MenuItem value={10}>Arun</MenuItem>
                      <MenuItem value={20}>Kunalan</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size="small">
                      Lead
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Lead"
                      // onChange={handleChange}
                      size="small"
                    >
                      <MenuItem value={10}>Titus</MenuItem>
                      <MenuItem value={20}>Janani</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size="small">
                      Recruiter
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Recruiter"
                      // onChange={handleChange}
                      size="small"
                    >
                      <MenuItem value={10}>Sumithra</MenuItem>
                      <MenuItem value={20}>Raj</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Typography>
      </Dialog>
    </>
  );
};

export default Employee;
