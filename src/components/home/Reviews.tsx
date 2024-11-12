"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const reviews: IReview[] = [
  {
    name: "Jane Doyle",
    image:
      "https://images.unsplash.com/photo-1730973915515-e79273d90b7c?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur esse accusamus culpa eos distinctio quis possimus beatae aliquam rem.",
  },
  {
    name: "Lily Lala",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Temporibus molestiae esse, ratione eaque odit eligendi ab accusamus reiciendis quisquam id incidunt aliquid dolore laudantium facere consequuntur eveniet nihil, quaerat voluptas amet sapiente!",
  },
  {
    name: "Jon Don",
    image:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Ratione eaque odit eligendi ab accusamus reiciendis quisquam id incidunt aliquid dolore laudantium facere consequuntur eveniet nihil, quaerat voluptas amet sapiente! Recusandae vero autem, minima laudantium eum veniam quo earum illum hic soluta delectus a?",
  },
];

const ReviewCard = (props: {
  review: IReview;
  paginate: (next: number) => void;
}) => {
  const { review, paginate } = props;

  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <Grid size={12} display="flex" justifyContent="center">
        <Avatar
          alt={review.name}
          src={review.image}
          sx={{ width: 80, height: 80 }}
        />
      </Grid>
      <Grid size={{ xs: 2, md: 3 }}>
        <ArrowBackIcon
          style={{ cursor: "pointer" }}
          onClick={() => paginate(-1)}
        />
      </Grid>
      <Grid size={{ xs: 8, md: 6 }}>
        <Box>
          <Box mb={2}>
            <Typography fontSize={20} textAlign="center">
              {review.name}
            </Typography>
          </Box>
          <Typography textAlign="center">{review.review}</Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 2, md: 3 }} display="flex" justifyContent="flex-end">
        <ArrowForwardIcon
          style={{ cursor: "pointer" }}
          onClick={() => paginate(1)}
        />
      </Grid>
    </Grid>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (next: number) => {
    if (next > 0) {
      const index = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    } else {
      const index = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
    }
  };

  return (
    <Container
      sx={{ minHeight: "50vh", display: "flex", alignItems: "center", py: 5 }}
    >
      <Box>
        <Typography
          variant="h2"
          fontSize={{ xs: "32px", md: "2.75rem" }}
          mb={5}
          align="center"
        >
          Customer Reviews
        </Typography>
        <ReviewCard review={reviews[currentIndex]} paginate={paginate} />
      </Box>
    </Container>
  );
}

interface IReview {
  name: string;
  image: string;
  review: string;
}
