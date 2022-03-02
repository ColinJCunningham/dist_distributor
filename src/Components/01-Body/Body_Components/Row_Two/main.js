import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ListTemplate from "./list";

export default function RowTwo(props) {
	return (
		<Stack
			style={{ marginTop: "3%" }}
			direction={{ xs: "column", sm: "row" }}
			spacing={{ xs: 1, sm: 2, md: 4 }}>
			<ListTemplate
				title='New Requests'
				push='Hold'
				primary='#A7C0DC'
				secondary='#1F2A47'
				text='Check Out'
				data={props.news}
				length={10}
			/>
			<ListTemplate
				title='Checked Out'
				push='Complete'
				primary='#F9EAC7'
				secondary='#A87811'
				text='Click To Complete'
				data={props.hold}
				length={10}
			/>
			<ListTemplate
				title='Completed'
				push='Catch'
				primary='#ECFEF8'
				secondary='#044731'
				text='-'
				data={props.complete}
				length={10}
			/>
		</Stack>
	);
}
