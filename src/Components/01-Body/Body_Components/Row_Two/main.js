import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ListTemplate from "./list";

export default function RowTwo() {
	return (
		<Stack
			style={{ marginTop: "3%" }}
			direction={{ xs: "column", sm: "row" }}
			spacing={{ xs: 1, sm: 2, md: 4 }}>
			<ListTemplate
				title='New Requests'
				primary='#A7C0DC'
				secondary='#1F2A47'
				text='Check Out'
			/>
			<ListTemplate
				title='Checked Out'
				primary='#A87811'
				secondary='#F9EAC7'
				text='Click To Complete'
			/>
			<ListTemplate
				title='Completed'
				primary='#ECFEF8'
				secondary='#044731'
				text='-'
			/>
		</Stack>
	);
}
