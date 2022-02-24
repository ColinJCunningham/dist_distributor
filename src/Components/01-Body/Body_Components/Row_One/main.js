import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import NewDistribution from "./dist";
import Dash from "./dash";

export default function RowOne() {
  return (
    <Stack direction='row' spacing={1}>
      <NewDistribution />
      <Dash />
    </Stack>
  );
}
