import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function NewDistribution() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <Paper
      onClick={(e) => console.log(1)}
      style={{
        minHeight: "20rem",
        backgroundColor: "#fbf5f3bb",
        minWidth: "20%",
        maxWidth: "45%",
        margin: "2% 2% 2% 0",
        borderRadius: "10px",
      }}
      variant='outlined'
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
            borderTop: "3px double #1f2a47",
            borderBottom: "6px double #1f2a47",
          }}>
          <h2
            style={{
              marginBottom: "2%",
              width: "fit-content",
              padding: ".5%",
            }}>
            New Distribution Entry
          </h2>
          <TextField
            fullWidth
            style={{ marginBottom: "3%" }}
            label='Full Name'
            id='fullWidth'
            {...register("firstName")}
            placeholder='Participant Name'
          />
          <TextField
            fullWidth
            style={{ marginBottom: "3%" }}
            label='Plan Name'
            id='fullWidth'
            {...register("planName")}
            placeholder='Plan Name'
          />
          <TextField
            fullWidth
            style={{ marginBottom: "3%" }}
            label='TPAID'
            id='fullWidth'
            {...register("tpaid")}
            placeholder='TPA ID'
          />

          <input
            style={{
              marginTop: "2%",
              width: "80%",
              padding: "1%",
              fontSize: "1rem",
              fontWeight: "800",
              color: "#1f2a47",
              backgroundColor: "transparent",
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
