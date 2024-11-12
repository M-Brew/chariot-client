import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const services = [
  {
    title: "Day Trips",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias atque nesciunt dolorem earum optio nostrum sequi ratione expedita.",
  },
  {
    title: "Chauffeur Services",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias.",
  },
  {
    title: "Party Bus",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias atque nesciunt dolorem earum.",
  },
  {
    title: "Corporate Trips",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias atque nesciunt dolorem earum optio nostrum sequi ratione expedita.",
  },
  {
    title: "Hikes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias.",
  },
  {
    title: "Tour Buses",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi molestias atque nesciunt dolorem earum.",
  },
];

export default function Services() {
  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h2"
          fontSize={{ xs: "32px", md: "3.75rem" }}
          mb={5}
          align="center"
        >
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {services.map((service, idx) => (
            <Grid
              key={idx}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Box
                sx={{
                  py: 3,
                  px: 2,
                }}
              >
                <Typography fontSize={{ xs: 18, lg: 20 }} mb={2}>
                  {service.title}
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
