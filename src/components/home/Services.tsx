import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const services = [
  {
    title: "Day Trips",
    description:
      "We offer rides ranging from SUVs to multiple dozen seats for day trips to resorts and other destinations with friends and loved ones.",
  },
  {
    title: "Chauffeur Services",
    description:
      "Recurring chauffeur services with convenient rides with punctual and well trusted drivers.",
  },
  {
    title: "Party Bus",
    description:
      "Well equipped buses with trusted drivers for party trips with family and friends.",
  },
  {
    title: "Corporate Trips",
    description:
      "We have suitable solutions for corporate retreats, trips and inner/inter city business travels.",
  },
  {
    title: "Hikes",
    description:
      "Plans on outer region visits to embark on hikes or other activities? We offer ideal solutions for that.",
  },
  {
    title: "Tour Buses",
    description:
      "Looking to visit multiple tour destinations in multiple regions with family and/or friends? We have the right rides and chauffeurs for this.",
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
