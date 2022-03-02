import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary'>
			{"Copyright © "}
			<Link color='inherit' href='https://mui.com/'>
				Distribution Dispenser
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "60vh",
			}}>
			<Box
				style={{ backgroundColor: "#94bbd3" }}
				component='footer'
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.grey[200]
							: theme.palette.grey[800],
				}}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>
						Built By Colin James Cunningham For Perosnal Use
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
