import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Next() {
	const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);
	const time = ["Daily Count", "Monthly Count", "Yearly Count"];
	return (
		<List style={{ color: "#e9f1f7", fontFamily: "bold, serif" }}>
			{array.map((value, index, text) => (
				<ListItem
					onClick={(e) => console.log(index)}
					style={{
						borderBottom: "2px double white",
						backgroundColor: `${index % 2 == 0 ? "#1F2A47" : "#4e5e88"}`,
						paddingLeft: "5px",
					}}
					button
					key={index}>
					<Stack
						style={{ width: "100%", padding: "1%" }}
						direction='row'
						divider={
							<Divider
								style={{ background: "white" }}
								orientation='vertical'
								flexItem
							/>
						}
						spacing={2}>
						<div style={{ width: "80%", fontSize: "1.4rem" }}>
							{time[index]}
						</div>
						<div style={{ width: "20%", fontSize: "1.4rem" }}>{index}</div>
					</Stack>
				</ListItem>
			))}
		</List>
	);
}
