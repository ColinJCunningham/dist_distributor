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
import Button from "@mui/material/Button";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

export default function Dash() {
	const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);

	return (
		<div
			onClick={(e) => console.log(1)}
			style={{
				minHeight: "20rem",
				backgroundColor: "transparent",
				width: "50%",
				margin: "2% 2% 2% 5%",
				borderRadius: "10px",
			}}>
			<span
				style={{
					fontSize: "2rem",
					fontFamily: "bold, serif",
					fontWeight: "800",
					color: "#1f2a47",
				}}>
				Aging Requests
			</span>
			<List>
				{array.map((value, index, text) => (
					<ListItem
						style={{
							textAlign: "center",
							border: "1px inset #1f2a47",
							marginBottom: "2%",
						}}
						key={index}>
						<Button
							style={{
								fontFamily: "bold, serif",
								fontWeight: "800",
								backgroundColor: "#044731",
							}}
							variant='contained'>
							Complete
						</Button>
						<ListItemText primary={value} secondary={text} />
						<Button
							style={{
								fontFamily: "bold, serif",
								border: "2px solid #1f2a47",
								color: "#1f2a47",
								fontWeight: "900",
								backgroundColor: "transparent",
								padding: ".1%",
							}}>
							Check Out
						</Button>
					</ListItem>
				))}
			</List>
		</div>
	);
}
