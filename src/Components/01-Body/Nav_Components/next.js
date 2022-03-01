import * as React from "react";
import { useState, useEffect } from "react";
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

export default function Next(props) {
	const [array, setArray] = React.useState([]);
	const time = ["Daily Count", "Monthly Count", "Yearly Count"];
	const date = new Date();
	const sortByDate = (complete) => {
		let daily = 0;
		let monthly = 0;
		let annual = 0;

		for (let i = 0; i < complete.length; i++) {
			const entrydate = complete[i].entryDate;
			if (entrydate <= Date.now()) {
				daily = daily + 1;
			}
			if (date.getMonth(entrydate) === date.getMonth()) {
				monthly = monthly + 1;
			}
			if (date.getFullYear(entrydate) === date.getFullYear()) {
				annual = annual + 1;
			}
		}
		setArray([daily, monthly, annual]);
	};

	useEffect(() => {
		sortByDate(props.complete);
	}, [props]);

	return (
		<List style={{ color: "#e9f1f7", fontFamily: "bold, serif" }}>
			{time.map((value, index, text) => (
				<ListItem
					onClick={(e) => sortByDate()}
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
						<div style={{ width: "20%", fontSize: "1.4rem" }}>
							{array[index]}
						</div>
					</Stack>
				</ListItem>
			))}
		</List>
	);
}
