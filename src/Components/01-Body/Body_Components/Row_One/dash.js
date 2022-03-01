import * as React from "react";
import { useState, useEffect } from "react";
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
import ButtonGroup from "@mui/material/ButtonGroup";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import db from "./firebase";
import Moment from "moment";

export default function Dash(props) {
	const [array, setArray] = React.useState([]);
	const aged = [];

	useEffect(() => {
		setArray(props.aged);
	}, [props]);

	const updateStatus = (id, status) => {
		db.collection("data")
			.where("ID", "==", id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.ref.update({ status: status });
				});
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	};

	return (
		<div
			onClick={(e) => console.log("array:", array)}
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
				{Object.entries(array).map((value, index, text) => (
					<ListItem
						style={{
							textAlign: "center",
							border: "1px inset #1f2a47",
							marginBottom: "2%",
						}}
						key={index}>
						<ListItemText
							style={{ textAlign: "left" }}
							primary={array[index].participantName}
							primaryTypographyProps={{
								fontWeight: "800",
								fontSize: "1.4rem",
							}}
							secondary={
								array[index].tpaID +
								" - " +
								array[index].planName +
								" - " +
								Moment(array[index].entryDate).format("MM/DD")
							}
						/>
						<ButtonGroup orientation='vertical'>
							<Button
								onClick={(e) => updateStatus(array[index].ID, "Hold")}
								style={{
									fontFamily: "bold, serif",
									border: "2px solid #1f2a47",
									color: "#1f2a47",
									fontWeight: "900",
									backgroundColor: "transparent",
									marginBottom: "3px",
								}}>
								Check Out
							</Button>
							<Button
								onClick={(e) => updateStatus(array[index].ID, "Complete")}
								style={{
									fontFamily: "bold, serif",
									fontWeight: "800",
									backgroundColor: "#044731",
									color: "white",
								}}>
								Completed
							</Button>
						</ButtonGroup>
					</ListItem>
				))}
			</List>
		</div>
	);
}
