import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import Typography from "@mui/material/Typography";
import ChartKey from "./list";

const data = [
	{ name: "New", value: 400 },
	{ name: "Checked Out", value: 300 },
	{ name: "Completed", value: 200 },
	{ name: "Aged Requests", value: 100 },
];

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

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline='central'>
			{`${(percent * 100).toFixed(0)}%` === "0%"
				? ""
				: `${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export default function Chart() {
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
						<Pie
							data={data}
							outerRadius={120}
							labelLine={false}
							label={renderCustomizedLabel}
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
