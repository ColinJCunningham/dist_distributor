import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import db from "./firebase";
import Moment from "moment";

export default function NewDistribution() {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState();
	const [change, setChange] = useState(2);
	const [clear, setClear] = useState(" ");

	const inputStyle = {
		marginBottom: "3%",
		color: "#1f2a47",
		minWidth: "80%",
		fontSize: "1.5rem",
		padding: "1%",
		backgroundColor: "#fbf5f3",
		borderRadius: "5px",
	};

	let currentDate = new Date();

	useEffect(() => {}, [change]);

	const makeId = () => {
		let ID = "";
		let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i = 0; i < 12; i++) {
			ID += characters.charAt(Math.floor(Math.random() * 36));
		}
		return ID;
	};

	const onSubmit = (data) => {
		// Add data to the store
		db.collection("data")
			.add({
				participantName: data.name,
				planName: data.planName,
				tpaID: data.tpaID,
				status: "New",
				entryDate: Date.now(),
				ID: makeId(),
			})
			.then((docRef) => {
				alert("Data Successfully Submitted");
				setChange({ change } + 2);
				document.getElementById("distform").reset();
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	};

	return (
		<Paper
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
				id='distform'
				style={{
					padding: "1%",
				}}
				onSubmit={handleSubmit(onSubmit)}>
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
						{...register("name")}
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
						{...register("tpaID")}
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
