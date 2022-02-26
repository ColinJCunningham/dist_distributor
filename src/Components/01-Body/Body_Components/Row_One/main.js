import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import NewDistribution from "./dist";
import Dash from "./dash";
import db from "../../../../Util/firebase";
import Moment from "moment";
import { useState, useEffect } from "react";

export default function RowOne() {
	const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);
	const [aged, setAged] = React.useState([]);

	function format_Date(date) {
		return Moment().format("DDD");
	}

	const fetchAged = async () => {
		db.collection("data")
			.where("status", "==", `New`)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const entry = doc.data().entryDate;
					var d1 = Moment().dayOfYear();
					var d2 = Moment(entry).dayOfYear();
					console.log(d1, d2);
				});
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	};

	useEffect(() => {
		fetchAged();
	}, []);

	return (
		<Stack direction='row' spacing={1}>
			<NewDistribution />
			<Dash />
		</Stack>
	);
}
