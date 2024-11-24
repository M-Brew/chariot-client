import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import Image from "next/image";

const vehicleTypes: { type: string; description: string; image: string }[] = [
  {
    type: "Luxury Vehicle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1653674022994-f9081eec1a53?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "SUVs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1698856712971-96693f20eb40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "Economic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam accusamus repellendus deserunt architecto.",
    image:
      "https://images.unsplash.com/photo-1521085799529-892b9b08687b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AboutUs() {
  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container sx={{ width: "100%" }} spacing={3}>
        <Grid size={12}>
          <Typography
            variant="h2"
            fontSize={{ xs: "32px", md: "3.75rem" }}
            mb={{ xs: 0, sm: 5 }}
            mt={{ xs: 3, sm: 0 }}
            align="center"
          >
            About Us
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography mb={5}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            ullam in hic, nobis velit quas repellendus vero ipsum facere alias
            architecto, explicabo dolor rerum dicta nam vitae veniam id nihil,
            porro nesciunt autem beatae excepturi itaque? Error ab eligendi
            deleniti dolorem quam vitae dolore sed totam?
          </Typography>
          <Typography>
            Ea asperiores omnis aliquam quis temporibus voluptate voluptatum
            labore sequi voluptates, corrupti commodi nobis, quidem enim nam
            saepe?
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box
            sx={{
              height: "53vh",
              display: "block",
              position: "relative",
              borderRadius: "5px",
              backgroundColor: "whitesmoke",
            }}
          >
            <Image
              alt="vehicle-type"
              src={vehicleTypes[0].image}
              fill
              style={{ objectFit: "cover", borderRadius: 5 }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Box
                sx={{
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#212121",
                  borderRadius: "5px",
                }}
              >
                <Box>
                  <Typography
                    color="white"
                    textAlign="center"
                    variant="h2"
                    fontSize={{ xs: "32px", md: "3rem" }}
                  >
                    5+ years
                  </Typography>
                  <Typography color="white" textAlign="center">
                    Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  height: "30vh",
                  display: "block",
                  position: "relative",
                  borderRadius: "5px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <Image
                  alt="vehicle-type"
                  src={vehicleTypes[1].image}
                  fill
                  style={{ objectFit: "cover", borderRadius: 5 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
