import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ListTemplate(props) {
	console.log(props);
	const primarycolor = props.primary;
	const secondarycolor = props.secondary;
	const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);
	return (
		<List style={{ width: "100%" }}>
			<h2
				style={{
					fontFamily: "bold, serif",
					borderBottom: "2px solid #1f2a47`",
					textAlign: "left",
				}}>
				{props.title}
			</h2>
			{array.map((value, index, text) => (
				<ListItem
					onClick={(e) => console.log(index)}
					style={{
						border: "2px double",
						borderColor: primarycolor,
						backgroundColor: `${
							index % 2 == 0 ? primarycolor : secondarycolor
						}`,
						padding: "0 10px 0 10px",
						color: `${index % 2 == 0 ? secondarycolor : primarycolor}`,
					}}
					button
					key={index}>
					<ListItemIcon>
						<ListItemText
							disableTypography
							style={{
								textAlign: "left",
								color: `${index % 2 == 0 ? secondarycolor : primarycolor}`,
							}}
							id={`checkbox-list-label-${value}`}
							primary={
								<p
									style={{
										fontFamily: "bold, serif",
										fontSize: ".8em",
										color: `${index % 2 == 0 ? secondarycolor : primarycolor}`,
									}}>
									{props.text}
								</p>
							}
							secondary={
								<Typography
									style={{
										fontFamily: "bold, serif",
										fontSize: ".8em",
										color: `${index % 2 == 0 ? secondarycolor : primarycolor}`,
									}}>
									10/21/1996
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
								MyTitle
							</Typography>
						}
						secondary={
							<Typography
								style={{
									fontFamily: "bold, serif",
									fontSize: ".8em",
								}}>
								MyTitle
							</Typography>
						}
					/>
				</ListItem>
			))}
		</List>
	);
}
