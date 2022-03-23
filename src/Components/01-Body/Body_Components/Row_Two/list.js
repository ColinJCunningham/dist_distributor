import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Moment from "moment";
import { useState, useEffect } from "react";
import db from "../../firebase";
import "../../../responsive.css";

export default function ListTemplate(props) {
	const primarycolor = props.primary;
	const secondarycolor = props.secondary;
	const [num, setNum] = useState(0);

	const updateStatus = async (id, change) => {
		if (change === "Catch") {
			console.log("No action");
		} else {
			db.collection("data")
				.where("ID", "==", `${id}`)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						console.log(id, change);
						doc.ref.update({ status: `${change}` });
					});
				})
				.then(() => {
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				})
				.catch((error) => {
					console.log("Error getting documents: ", error);
				});
		}
	};
	let currentDate = new Date("January 1, 2022 23:15:30");
	useEffect(() => {}, [num]);

	return (
		<List id='list' style={{ minWidth: "fit-content" }}>
			<h2
				// onClick={(e) => updateStatus(value.ID)}
				style={{
					fontFamily: "bold, serif",
					borderBottom: "2px solid #1f2a47`",
					textAlign: "left",
				}}>
				{props.title + ": " + props.data.length}
			</h2>
			{props.data
				.filter((element, index) => index < props.length)
				.map((value, index, text) => (
					<ListItem
						onClick={(e) => updateStatus(value.ID, props.push)}
						style={{
							border: "2px double",
							borderColor: primarycolor,
							backgroundColor: `${
								index % 2 === 0 ? primarycolor : secondarycolor
							}`,
							padding: "0 10px 0 10px",
							color: `${index % 2 === 0 ? secondarycolor : primarycolor}`,
						}}
						button
						key={index}>
						<ListItemIcon>
							<ListItemText
								disableTypography
								style={{
									textAlign: "left",
									color: `${index % 2 === 0 ? secondarycolor : primarycolor}`,
								}}
								id={`checkbox-list-label-${value}`}
								primary={
									<p
										style={{
											fontFamily: "bold, serif",
											fontSize: ".8em",
											color: `${
												index % 2 === 0 ? secondarycolor : primarycolor
											}`,
										}}>
										{props.text}
									</p>
								}
								secondary={
									<Typography
										style={{
											fontFamily: "bold, serif",
											fontSize: ".8em",
											color: `${
												index % 2 === 0 ? secondarycolor : primarycolor
											}`,
										}}>
										{Moment(value.entryDate).format("MM/DD")}
									</Typography>
								}
							/>
						</ListItemIcon>

						<ListItemText
							disableTypography
							style={{
								textAlign: "right",
							}}
							id={`checkbox-list-label-${value}`}
							primary={
								<Typography
									style={{
										fontFamily: "bold, serif",
										fontSize: "1.2em",
									}}>
									{value.participantName}
								</Typography>
							}
							secondary={
								<Typography
									style={{
										fontFamily: "bold, serif",
										fontSize: ".8em",
									}}>
									{value.planName + " - " + value.tpaID}
								</Typography>
							}
						/>
					</ListItem>
				))}
		</List>
	);
}
