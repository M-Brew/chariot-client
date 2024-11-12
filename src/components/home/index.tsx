"use client";

import { useRef, useState } from "react";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Landing from "./Landing";
import Services from "./Services";
import Vehicles from "./Vehicles";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import BookRideForm from "./BookRideForm";

export default function Home() {
  const [open, setOpen] = useState(false);

  const topRef = useRef<HTMLElement>();
  const servicesRef = useRef<HTMLElement>();
  const vehiclesRef = useRef<HTMLElement>();
  const howItWorksRef = useRef<HTMLElement>();
  const aboutUsRef = useRef<HTMLElement>();
  const reviewsRef = useRef<HTMLElement>();

  const handleClick = (link: string) => {
    switch (link) {
      case "Services":
        return servicesRef.current?.scrollIntoView({ behavior: "smooth" });
      case "Vehicles":
        return vehiclesRef.current?.scrollIntoView({ behavior: "smooth" });
      case "How It Works":
        return howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
      case "About Us":
        return aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
      case "Reviews":
        return reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
      default:
        return topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box>
        <Box
          ref={topRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <Header handleClick={handleClick} />
          <Landing onBook={() => setOpen(true)} />
          <hr />
        </Box>
        <Box
          ref={servicesRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <Services />
          <hr />
        </Box>
        <Box
          ref={vehiclesRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <Vehicles />
          <hr />
        </Box>
        <Box
          ref={howItWorksRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <HowItWorks />
          <hr />
        </Box>
        <Box
          ref={aboutUsRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <AboutUs />
          <hr />
        </Box>
        <Box
          ref={reviewsRef}
          sx={{
            scrollSnapAlign: "start",
          }}
        >
          <Reviews />
          <Footer handleClick={handleClick} onBook={() => setOpen(true)} />
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Book a ride</DialogTitle>
        <DialogContent>
          <BookRideForm handleClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
