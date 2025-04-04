import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Image from "next/image";
import SlideShow from "../slideshow/SlideShow2";

export default function Landing(props: { onBook?: () => void }) {
  const { onBook } = props;

  // const imageSrc =
  //   "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Container
      sx={{ minHeight: "91vh", display: "flex", alignItems: "center" }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 3 }} display={{ xs: "none", sm: "block" }}>
            <Box mt={2}>
              <Typography>Chariot Services</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>
              <Typography
                variant="h2"
                textAlign="center"
                fontSize={{ xs: "32px", md: "3.75rem" }}
                mt={{ xs: 2, sm: 0 }}
              >
                Car rental solutions for your every need
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 3 }}
            display="flex"
            justifyContent={{ xs: "center", sm: "end" }}
          >
            <Box mt={2}>
              <Button variant="contained" onClick={onBook}>
                Book a ride
              </Button>
            </Box>
          </Grid>
          {/* <Grid size={12} pt={3}>
            <Box
              sx={{
                width: "100%",
                height: "55vh",
                display: "block",
                position: "relative",
              }}
            >
              <Image
                alt="landing"
                src={imageSrc}
                fill
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
            </Box>
          </Grid> */}
          <Grid size={12} pt={3}>
            <Box sx={{ height: "55vh", width: "80vw" }}>
              <SlideShow />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
