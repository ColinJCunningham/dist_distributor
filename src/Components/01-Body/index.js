import * as React from "react";
//Material UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
//Components
import Chart from "../01-Body/Nav_Components/piechart";
import Next from "../01-Body/Nav_Components/next";
import RowOne from "../01-Body/Body_Components/Row_One/main";
import RowTwo from "../01-Body/Body_Components/Row_Two/main";
import { useState, useEffect } from "react";
import Moment from "moment";

import db from "./firebase";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-300px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - 300px)`,
		marginLeft: `300px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function MainDrawer() {
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const spacer = {
		width: "100%",
		height: "5px",
		backgroundColor: "#1f2a47",
	};

	const fetchAged = async () => {
		db.collection("data")
			.where("status", "==", `New`)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const entry = doc.data().entryDate;

					var d1 = Moment().dayOfYear();
					var d2 = Moment(entry).dayOfYear();
					var y1 = Moment().year();
					var y2 = Moment(entry).year();

					if (y1 === y2 && d2 - d1 < 10) {
					} else {
						doc.ref.update({ status: "Aged" });
					}
				});
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	};
	const [aged, setAged] = React.useState([]);
	const [news, setNews] = React.useState([]);
	const [hold, setHold] = React.useState([]);
	const [complete, setComplete] = React.useState([]);
	const [confirm, setConfirm] = React.useState(0);
	const [chartdata, setChartdata] = React.useState([]);

	const chkdate = (array) => {
		let num = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i].entryDate <= Date.now()) {
				num = num + 1;
			}
		}
		return num;
	};

	const passData = async () => {
		db.collection("data")
			.get()
			.then((querySnapshot) => {
				let aged = [];
				let newer = [];
				let hold = [];
				let completed = [];
				let dod = "Working";
				querySnapshot.forEach((doc) => {
					if (doc.data().status === "Aged") {
						aged.push(doc.data());
					}
					if (doc.data().status === "New") {
						newer.push(doc.data());
					}
					if (doc.data().status === "Hold") {
						hold.push(doc.data());
					}
					if (doc.data().status === "Complete") {
						completed.push(doc.data());
					}
				});
				return [aged, newer, hold, completed];
			})
			.then((data) => {
				setChartdata([
					data[0].length,
					data[1].length,
					data[2].length,
					chkdate(data[3]),
				]);
				setAged(data[0]);
				setNews(data[1]);
				setHold(data[2]);
				setComplete(data[3]);
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	};

	useEffect(() => {
		fetchAged();
		passData();
	}, [confirm]);

	const [change, setChange] = useState([]);

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				style={{
					backgroundColor: "#4e5e88",
					color: "whitesmoke",
				}}
				open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{ mr: 2, ...(open && { opacity: "90%", color: "#1f2a47" }) }}>
						<MenuIcon />
					</IconButton>
					<Typography
						onClick={(e) =>
							console.log("Saved Data", aged, news, hold, complete)
						}
						style={{
							fontFamily: "fancy, serif",
							fontWeight: "900",
							flexGrow: 2,
							color: "#bfd1e5",
							height: "inherit",
							width: "fit-content",
							textDecoration: "underline",
							color: "#fbf5f3",
						}}
						variant='h4'>
						DISTRIBUTION DISPENSER
					</Typography>
					<Button
						style={{
							fontFamily: "fancy, serif",
							fontWeight: "900",
							border: "solid 1px #fbf5f3",
							color: "#fbf5f3",
						}}
						color='inherit'>
						Refresh Data
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				style={{ height: "70%", backgroundColor: "#bfd1e5", marginTop: "10%" }}
				sx={{
					width: 300,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: 300,
						boxSizing: "border-box",
						maxHeight: "100%",
						backgroundColor: "#1F2A47",
					},
				}}
				variant='persistent'
				anchor='left'
				open={open}>
				<DrawerHeader style={{ marginTop: "10%" }}>
					<Stack style={{ margin: "0 auto", paddingTop: "1%" }}>
						<h1
							style={{
								margin: "0 auto",
								fontFamily: "fancy, serif",
								textEmphasis: "bold",
								color: "#fbf5f3",
								textAlign: "left",
							}}>
							Current Workload
						</h1>
						<a
							href='#'
							style={{
								textAlign: "center",
								width: "auto",
								color: "#e9f1f7",
								fontFamily: "fancy, serif",
							}}
							onClick={handleDrawerClose}>
							Close Menu
						</a>
					</Stack>
				</DrawerHeader>
				<Divider
					style={{
						borderTop: "3px double #bec3c6",
						color: "#bec3c6",
						marginTop: "5%",
					}}
				/>
				<div style={{ padding: "1rem", backgroundColor: "#e9f1f7aa" }}>
					<Chart data={chartdata} />
				</div>
				<Divider
					style={{ borderTop: "3px double #bec3c6", color: "#bec3c6" }}
				/>
				<Next complete={complete} />
			</Drawer>
			<Main style={{ marginTop: "5%" }} open={open}>
				<DrawerHeader />
				<div style={spacer} />
				<Stack>
					<RowOne aged={aged} />
					<div style={spacer} />
					<RowTwo news={news} hold={hold} complete={complete} />
				</Stack>
			</Main>
		</Box>
	);
}
