import React from 'react'
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    Button,
    Toolbar,
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
 
  import SaveIcon from "@mui/icons-material/Save";
  import { useFormik } from "formik";
  import * as yup from "yup";
  import OpenInFullIcon from "@mui/icons-material/OpenInFull";
  import CloseIcon from "@mui/icons-material/Close";
  import "yup-phone";

export const EmployeeForm = ({handleClosed}) => {
    const [value, setValue] = React.useState(dayjs());
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
        .min(12, "Must Have 12 Number"),
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
      recruiter: yup.string().required("Enter Recruiter")
    }),
    onSubmit: (value) => {
      handleClosed.formikSubmit()
    },
  });
  return (
       
        <form onSubmit={formik.handleSubmit}>
           
          <div style={{backgroundColor:'#1565c0'}}>
           <Grid position="static"style={{backgroundColor:'white',marginLeft:'12px',height:'16vh'}}>
            <Toolbar >
              <Grid sx={{flexGrow:1}} >
               <Chip label="employee" color="primary"/>
              </Grid>
              <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="close"
                      onClick={handleClosed.handleFullWidthChange}
                      sx={{mr:1}}
                      style={{ color: "black" }}>
                      <OpenInFullIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="close"
                      style={{ color: "black" }}
                      onClick={handleClosed.handleClose}
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
              onClick={handleClosed.handleCancel }
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
              <hr></hr>
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
                      {formik.errors.materialStatus || formik.touched.materialStatus ? (
                        <span className="span">{formik.errors.materialStatus}</span>
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
  )
}