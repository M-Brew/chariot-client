import React, { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BookRideForm(props: { handleClose?: () => void }) {
  const { handleClose } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [days, setDays] = useState<number | null>();

  const handleBook = () => {
    console.log({ name, email, phone, vehicle, date, days });
    handleClose?.();
  };

  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Name:</Typography>
            <TextField
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Email:</Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Phone Number:</Typography>
            <TextField
              id="phone"
              name="phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Vehicle Type:</Typography>
            <TextField
              id="vehicle"
              name="vehicle"
              type="text"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Date Required:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                sx={{ width: "100%" }}
                slotProps={{ textField: { size: "small" } }}
                format="DD-MM-YYYY"
                minDate={dayjs()}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={12}>
            <Typography sx={{ mb: 1 }}>Days:</Typography>
            <TextField
              id="days"
              name="days"
              type="number"
              value={days}
              onChange={(e) => setDays(Number.parseInt(e.target.value))}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid size={12} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleBook} sx={{ mr: 2 }}>
              Book
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
