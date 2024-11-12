"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const vehicleTypes: { type: string; description: string; image: string }[] = [
  {
    type: "Luxury Vehicle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "SUVs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1534791108293-e080c7d856e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Economic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1521085799529-892b9b08687b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Vehicles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (next: number) => {
    if (next > 0) {
      const index =
        currentIndex === vehicleTypes.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    } else {
      const index =
        currentIndex === 0 ? vehicleTypes.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
    }
  };

  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container sx={{ width: "100%" }} spacing={2}>
        <Grid size={12}>
          <Typography
            variant="h2"
            fontSize={{ xs: "32px", md: "3.75rem" }}
            mb={5}
            align="center"
          >
            Vehicle Categories
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: { xs: "50vh", md: "70vh" },
              display: "block",
              position: "relative",
            }}
          >
            <Image
              alt="vehicle-type"
              src={vehicleTypes[currentIndex].image}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} display="flex" alignItems="center">
          <Box>
            <Box>
              <Typography
                align="right"
                variant="h2"
                fontSize={{ xs: "22px", md: 40 }}
              >
                {vehicleTypes[currentIndex].type}
              </Typography>
            </Box>
            <Box my={3}>
              <Typography align="right">
                {vehicleTypes[currentIndex].description}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <ArrowBackIcon
                style={{ marginRight: "1rem", cursor: "pointer" }}
                onClick={() => paginate(-1)}
              />
              <ArrowForwardIcon
                style={{ cursor: "pointer" }}
                onClick={() => paginate(1)}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
