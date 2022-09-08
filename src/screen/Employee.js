import React from "react";
import "./employee.css";
import "../popup.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BootstrapButton, AtsTextField } from "./employeeCss.js";
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
        .min(12, "Must Have 12 Number"),
      address: yup.string().required("Enter address"),
      year: yup.number().required("Enter Year").min(4),
      month: yup.number().required("Enter Month").min(1).max(12),
    }),
    onSubmit: (value) => {
      var alert = window.confirm("Employee details added Successfully");

      if (alert === true) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    },
  });
  const navigate = useNavigate();
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
            onClick={handleClickOpen}
            variant="contained"
            startIcon={<AddIcon />}
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
                      onClick={() => {
                        maxWidth === "md"
                          ? setMaxWidth("lg")
                          : setMaxWidth("md");
                      }}
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
                        <Button variant="contained" onClick={handleClosed}>
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          startIcon={<SaveIcon fontSize="small" />}
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

          <Typography gutterBottom>
            <Grid sx={{ pt: 2, pl: 3, pr: 3, pb: 3 }} container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h8" style={{ fontWeight: 600 }}>
                    Basic Information
                  </Typography>
                  <hr></hr>
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
                  <hr></hr>
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
                          Material Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Material Status"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                  <hr></hr>
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
                  <Grid sx={{ pt: 2 }} container spacing={2}>
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
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="small"
                        >
                          <MenuItem value={10}>Full Time</MenuItem>
                          <MenuItem value={20}>Part Time</MenuItem>
                        </Select>
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
                          // value={age}
                          label="Designation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                          name="desgination"
                          value={formik.values.desgination}
                          label="Designation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                            name="year"
                            value={formik.values.year}
                            type="number"
                            variant="outlined"
                            size="small"
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
                  <hr></hr>
                  <Stack sx={{ pt: 2 }} spacing={2}>
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
        </form>
      </Dialog>
    </>
  );
};

export default Employee;
