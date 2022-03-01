import React from "react";
import { useState, useEffect } from "react";
import {
	PieChart,
	Pie,
	Legend,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChartKey from "./list";

const Demo = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}));

const COLORS = ["#384B80", "#EF8C1A", "#034732", "#AB3428"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return <text>{`${(percent * 100).toFixed(0)}%`}</text>;
};

export default function Chart(props) {
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	const [sum, setSum] = React.useState();
	const data = [
		{ name: "New", value: props.data[1] === 0 ? 0.0 : props.data[1] },
		{
			name: "Checked Out",
			value: props.data[2] === 0 ? 0.0005 : props.data[2],
		},
		{ name: "Completed", value: props.data[3] === 0 ? 0.0 : props.data[3] },
		{
			name: "Aged Requests",
			value: props.data[0] === 0 ? 0.0 : props.data[0],
		},
	];

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div
					style={{
						backgroundColor: "white",
						borderRadius: "5",
						padding: "2",
						fontFamily: "big, straight, serif",
					}}
					className='custom-tooltip'>
					<p className='label'>{`${payload[0].name} : ${Math.floor(
						(payload[0].value / sum) * 100
					)}%`}</p>
				</div>
			);
		}

		return null;
	};

	const refiner = (data) => {
		for (let i = 0; i < data.length; i++) {
			if (data[i] === 0) {
				data.push(data[i]);
			}
		}
	};

	const getSum = (data) => {
		let sum = 0;
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			sum = sum + element;
		}
		setSum(sum);
	};

	useEffect(() => {
		getSum(props.data);
	}, [props]);

	return (
		<div
			style={{
				width: "100%",
				marginLeft: "0px",
				minHeight: "fit-content",
			}}>
			<Typography
				style={{
					color: "black",
					fontFamily: "fancy, serif",
					fontWeight: "700",
					paddingTop: "3%",
				}}
				variant='h4'
				component='div'>
				Stat Overview
			</Typography>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart width={800} height={400}>
						<Tooltip content={<CustomTooltip />} />
						<Pie
							data={data}
							outerRadius={120}
							labelLine={true}
							isAnimationActive={true}
							label
							dataKey='value'>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<ChartKey />
		</div>
	);
}
