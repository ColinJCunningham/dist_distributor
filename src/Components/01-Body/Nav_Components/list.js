import * as React from "react";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import SquareIcon from "@mui/icons-material/Square";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function ChartKey() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // const COLORS = ["#1f2a47", "#EF8C1A", "#034732", "#AB3428"];
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item
          style={{
            backgroundColor: "#384B80",
            color: "white",
            fontWeight: "700",
          }}>
          Not Started
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item
          style={{
            backgroundColor: "#EF8C1A",
            color: "white",
            fontWeight: "700",
          }}>
          Checked Out
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item
          style={{
            backgroundColor: "#034732",
            color: "white",
            fontWeight: "700",
          }}>
          Completed
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item
          style={{
            backgroundColor: "#AB3428",
            color: "white",
            fontWeight: "700",
          }}>
          Aged Requests
        </Item>
      </Grid>
    </Grid>
  );
}
