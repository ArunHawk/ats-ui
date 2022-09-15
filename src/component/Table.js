import React, { useState } from "react";
import Data from "./data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Employee from "../screen/Employee";
import "../App.css";
function TableList() {
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

  // const numAscending = [...employees].sort((a, b) => a.id - b.id);
  // console.log(numAscending);

  // // 👇️ sort by Numeric property DESCENDING (100 - 1)
  // const numDescending = [...employees].sort((a, b) => b.id - a.id);
  // console.log(numDescending);

  return (
    <>
      <div className="Emp">
        <Employee className="EMP" />{" "}
      </div>

      <div>
        <Paper className="container">
          <Table className="Table">
            <TableHead>
              <TableRow>
                <TableCell numeric="left">
                  <th onClick={() => sortingNumber("employeeid")}>
                    <div className="tan">
                      <h4>Employee ID</h4>
                      <ImportExportIcon className="iconStyle" />
                    </div>
                  </th>
                </TableCell>

                <TableCell>
                  <th onClick={() => sorting("fullName")}>
                    <div className="tan">
                      <h4>Full Name</h4>
                      <ImportExportIcon className="iconStyle" />
                    </div>
                  </th>
                </TableCell>

                <TableCell>
                  <th onClick={() => sorting("designation")}>
                    <div className="tan">
                      <h4>Designation</h4>
                      <ImportExportIcon className="iconStyle" />
                    </div>
                  </th>
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
                  <th onClick={() => sorting("joiningData")}>
                    <div className="tan">
                      <h4>Joining Data</h4>
                      <ImportExportIcon className="iconStyle" />
                    </div>
                  </th>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
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

export default TableList;
