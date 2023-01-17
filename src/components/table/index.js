import * as React from "react";
import "./tab.css";
import { Grid, Box, Typography, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const ImgBox = styled(Box)(({ theme }) => ({
  backgroundColor: "blue",
  width: "120px",
  height: "110px",
}));

export default function BasicTable() {
  return (
    <Table sx={{ width: "1170px" }}>
      <TableHead>
        <TableCell colSpan={2} align="center" className="tableTitle">
          Product Name
        </TableCell>

        <TableCell align="center" className="tableTitle">
          Quantity
        </TableCell>
        <TableCell align="center" className="tableTitle">
          Price pcs
        </TableCell>
        <TableCell align="center" className="tableTitle">
          Discount pcs
        </TableCell>
        <TableCell align="center" className="tableTitle">
          Total
        </TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={4}>
            <ImgBox />
          </TableCell>

          <TableCell align="left" className="tablePar">
            Aero Fryer Medium 3,5L
          </TableCell>
          <TableCell align="center" className="tablePar">
            3
          </TableCell>
          <TableCell align="center" className="tablePar">
            800 kr
          </TableCell>
          <TableCell align="center" className="tablePar">
            -160 kr
          </TableCell>
          <TableCell align="center" className="tablePar">
            2400 kr
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tablePar1">
            Kllldlldldlsddsds leverans
          </TableCell>
          <TableCell align="center" className="tablePar1">
            1
          </TableCell>
          <TableCell align="center" className="tablePar1">
            40 kr
          </TableCell>
          <TableCell align="center" className="tablePar1">
            -15 kr
          </TableCell>
          <TableCell align="center" className="tablePar1">
            25 kr
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tablePar1">
            Kllldlldldlsddsds leverans
          </TableCell>
          <TableCell align="center" className="tablePar1">
            1
          </TableCell>
          <TableCell align="center" className="tablePar1">
            20 kr
          </TableCell>
          <TableCell align="center" className="tablePar1">
            -5 kr
          </TableCell>
          <TableCell align="center" className="tablePar1">
            15 kr
          </TableCell>
        </TableRow>
        <TableRow sx={{ backgroundColor: "#ebedee" }}>
          <TableCell colSpan={4} className="tablePar2">
            Total:
          </TableCell>

          <TableCell align="center" className="tablePar2">
            2080
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
