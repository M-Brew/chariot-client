import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

export default function HowItWorks() {
  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ width: "100%" }} my={{ xs: 2, md: 0 }}>
        <Typography
          variant="h2"
          fontSize={{ xs: "32px", md: "3.75rem" }}
          mb={5}
          align="center"
        >
          How It Works
        </Typography>
        <Grid container spacing={2}>
          <Grid
            size={4}
            minHeight={160}
            display={{ xs: "none", md: "block" }}
          ></Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            minHeight={160}
            sx={{
              "--Grid-borderWidth": "1px",
              border: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              p: 2,
            }}
          >
            <Typography fontSize={18}>1. Lorem ipsum, dolor</Typography>
            <Typography fontSize={14} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium sapiente minus mollitia soluta sit illum?
            </Typography>
          </Grid>
          <Grid
            size={4}
            minHeight={160}
            display={{ xs: "none", md: "block" }}
          ></Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            minHeight={160}
            sx={{
              "--Grid-borderWidth": "1px",
              border: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              p: 2,
            }}
          >
            <Typography fontSize={18}>2. Lorem ipsum, dolor</Typography>
            <Typography fontSize={14} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium sapiente minus mollitia soluta sit illum?
            </Typography>
          </Grid>
          <Grid
            size={4}
            minHeight={160}
            display={{ xs: "none", md: "block" }}
          ></Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            minHeight={160}
            sx={{
              "--Grid-borderWidth": "1px",
              border: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              p: 2,
            }}
          >
            <Typography fontSize={18}>3. Lorem ipsum, dolor</Typography>
            <Typography fontSize={14} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium sapiente minus mollitia soluta sit illum?
            </Typography>
          </Grid>
          <Grid
            size={4}
            minHeight={160}
            display={{ xs: "none", md: "block" }}
          ></Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            minHeight={160}
            sx={{
              "--Grid-borderWidth": "1px",
              border: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              p: 2,
            }}
          >
            <Typography fontSize={18}>4. Lorem ipsum, dolor</Typography>
            <Typography fontSize={14} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium sapiente minus mollitia soluta sit illum?
            </Typography>
          </Grid>
          <Grid
            size={4}
            minHeight={160}
            display={{ xs: "none", md: "block" }}
          ></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
