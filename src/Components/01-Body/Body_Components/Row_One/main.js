import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import NewDistribution from "./dist";
import Dash from "./dash";
import db from "./firebase";
import Moment from "moment";
import { useState, useEffect } from "react";

export default function RowOne(props) {
	const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);
	const [aged, setAged] = React.useState([]);
	const [news, setNews] = React.useState([]);

	useEffect(() => {
		setAged(props.aged);
	}, [props]);

	return (
		<Stack
			direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
			spacing={1}>
			<NewDistribution />
			<Dash aged={aged} />
		</Stack>
	);
}
