import React from "react";
import Data from "./data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {  Paper} from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Employee from '../screen/Employee'
import "../App.css";
function TableList() {
  return (
    <>  
    <div className="Emp"><Employee className="EMP"/>   </div>
      
      <div>
       
      
        <Paper className="container">
          <Table className="Table">
            <TableHead>
              <TableRow>
                <TableCell numeric>
                  <div className="tan">
                    <h4 >Employee Id</h4>
                    <ImportExportIcon className="iconStyle" />
                  </div>
                </TableCell>
                <TableCell numeric="left">
                <div className="tan">
                <h4>Full Name</h4>
                    <ImportExportIcon className="iconStyle" />
                  </div>
                </TableCell>
                <TableCell numeric="left">
                <div className="tan">
                <h4>Designation</h4>
                    <ImportExportIcon className="iconStyle" />
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
                <h4>Joining data</h4>
                    <ImportExportIcon className="iconStyle" />
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Data.map((item) => (
                <TableRow key={item.employeeid}>
                  <TableCell numeric="left"> <FiberManualRecordIcon style={{height:11, color: item.active ? "green" : "red"}}/> {item.employeeid}</TableCell>
                  <TableCell numeric="left">{item.fullName}</TableCell>
                  <TableCell numeric="left">{item.designation}</TableCell>
                  <TableCell numeric="left">{item.lead}</TableCell>
                  <TableCell numeric="left">{item.manager}</TableCell>
                  <TableCell numeric="left">{item.mobile}</TableCell>
                  <TableCell numeric="left">{item.emailId}</TableCell>
                  <TableCell numeric="left">{item.joiningData}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </>
  );
}

export default TableList;
