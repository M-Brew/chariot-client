"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { AnimatePresence, motion } from "framer-motion";

const reviews: IReview[] = [
  {
    id: "1",
    name: "Jane Doyle",
    image:
      "https://images.unsplash.com/photo-1730973915515-e79273d90b7c?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Temporibus molestiae esse, ratione eaque odit eligendi ab accusamus reiciendis quisquam id incidunt aliquid dolore laudantium facere consequuntur eveniet nihil, quaerat voluptas amet sapiente!",
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur esse accusamus culpa eos distinctio quis possimus beatae aliquam rem.",
  },
  {
    id: "2",
    name: "Lily Lala",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Temporibus molestiae esse, ratione eaque odit eligendi ab accusamus reiciendis quisquam id incidunt aliquid dolore laudantium facere consequuntur eveniet nihil, quaerat voluptas amet sapiente!",
  },
  {
    id: "3",
    name: "Jon Don",
    image:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Ratione eaque odit eligendi ab accusamus reiciendis quisquam id incidunt aliquid dolore laudantium facere consequuntur eveniet nihil, quaerat voluptas amet sapiente! Recusandae vero autem, minima laudantium eum veniam quo earum illum hic soluta delectus a?",
  },
];

const variants = {
  initial: (direction: string) => {
    return { opacity: 0, x: direction === "right" ? -300 : 300 };
  },
  animate: { opacity: 1, x: 0 },
  exit: (direction: string) => {
    return {
      opacity: 0,
      x: direction === "left" ? 300 : -300,
      transition: { duration: 1, ease: "easeInOut" },
    };
  },
};

const ReviewCard = (props: {
  review: IReview;
  paginate: (next: number) => void;
  direction: string;
}) => {
  const { review, paginate, direction } = props;

  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <Grid
        size={{ xs: 2, md: 3 }}
        pt={{ xs: "20vh", md: "12vh" }}
      >
        <ArrowBackIcon
          style={{ cursor: "pointer" }}
          onClick={() => paginate(-1)}
        />
      </Grid>
      <Grid size={{ xs: 8, md: 6 }}>
        <motion.div
          key={review.id}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          transition={{
            opacity: { ease: "linear" },
            delay: 0,
            duration: 0.5,
          }}
        >
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar
              alt={review.name}
              src={review.image}
              sx={{ width: 80, height: 80 }}
            />
          </Box>
          <Box mb={2}>
            <Typography fontSize={20} textAlign="center">
              {review.name}
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography textAlign="center">{review.review}</Typography>
          </Box>
        </motion.div>
      </Grid>
      <Grid
        size={{ xs: 2, md: 3 }}
        display="flex"
        justifyContent="flex-end"
        pt={{ xs: "20vh", md: "12vh" }}
      >
        <ArrowForwardIcon
          style={{ cursor: "pointer" }}
          onClick={() => paginate(1)}
        />
      </Grid>
    </Grid>
    // </motion.div>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const paginate = (next: number) => {
    if (next > 0) {
      const index = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(index);
      setDirection("right");
    } else {
      const index = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
      setDirection("left");
    }
  };

  return (
    <Container
      sx={{ minHeight: "55vh", display: "flex", alignItems: "center", py: 5 }}
    >
      <Box sx={{ minHeight: "55vh" }}>
        <Typography
          variant="h2"
          fontSize={{ xs: "32px", md: "2.75rem" }}
          mb={5}
          align="center"
        >
          Customer Reviews
        </Typography>
        <AnimatePresence custom={direction}>
          <ReviewCard
            review={reviews[currentIndex]}
            paginate={paginate}
            direction={direction}
          />
        </AnimatePresence>
      </Box>
    </Container>
  );
}

interface IReview {
  id: string;
  name: string;
  image: string;
  review: string;
}
