import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

export default function NewDistribution() {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");
	const inputStyle = {
		marginBottom: "3%",
		color: "#1f2a47",
		minWidth: "80%",
		fontSize: "1.5rem",
		padding: "1%",
		backgroundColor: "#fbf5f3",
		borderRadius: "5px",
	};
	return (
		<Paper
			onClick={(e) => console.log(1)}
			style={{
				minHeight: "15rem",
				maxHeight: "20rem",
				backgroundColor: "#4e5e88",
				minWidth: "20%",
				maxWidth: "45%",
				margin: "2% 2% 2% 0",
				borderRadius: "10px",
				color: "#fbf5f3",
			}}
			elevation={3}
			square>
			<form
				style={{
					padding: "1%",
				}}
				onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
				<div
					style={{
						padding: "2%",
						borderTop: "3px double #bed0e5",
						borderBottom: "6px double #bed0e5",
						textAlign: "left",
					}}>
					<h2
						style={{
							marginBottom: "2%",
							width: "fit-content",
							padding: ".5%",
						}}>
						New Distribution Entry
					</h2>
					<input
						style={inputStyle}
						label='Full Name'
						{...register("firstName")}
						placeholder='Participant Name'
					/>
					<input
						style={inputStyle}
						label='Plan Name'
						{...register("planName")}
						placeholder='Plan Name'
					/>
					<input
						style={inputStyle}
						label='TPAID'
						{...register("tpaid")}
						placeholder='TPA ID'
					/>

					<input
						style={{
							marginTop: "2%",
							width: "100%",
							padding: "1%",
							fontSize: "1rem",
							fontWeight: "800",
							color: "#1f2a47",
							backgroundColor: "#bfd1e5",
						}}
						type='submit'
					/>
				</div>
			</form>
		</Paper>
	);
}

{
	/* <input {...register("firstName")} placeholder='First name' />
        <textarea {...register("aboutYou")} placeholder='About you' /> */
}
