import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

export default function AboutUs() {

  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container sx={{ width: "100%" }} spacing={2}>
        <Grid size={12}>
          <Typography variant="h2" mb={5} align="center">
            About Us
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
