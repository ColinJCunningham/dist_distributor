import React from "react";
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

const data = [
  { name: "New", value: 400 },
  { name: "Checked Out", value: 300 },
  { name: "Completed", value: 200 },
  { name: "Aged Requests", value: 100 },
];
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
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
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
