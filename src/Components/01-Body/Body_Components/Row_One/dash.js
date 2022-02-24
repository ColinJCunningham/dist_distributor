import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";

export default function Dash() {
  const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div
      onClick={(e) => console.log(1)}
      style={{
        minHeight: "20rem",
        backgroundColor: "transparent",
        minWidth: "40%",
        maxWidth: "50%",
        margin: "2% 2% 2% 0",
        borderRadius: "10px",
      }}
      square>
      <List>
        {array.map((value, index, text) => (
          <ListItem
            onClick={(e) => console.log(index)}
            style={{
              borderBottom: "2px double white",
              backgroundColor: "transparent",
            }}
            button
            key={index}>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense>
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": `checkbox-list-label-${value}`,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={"1"} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
