import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const navLinks = [
  "Services",
  "Vehicles",
  "How It Works",
  "About Us",
  "Reviews",
];

export default function Footer(props: {
  handleClick?: (link: string) => void;
  onBook?: () => void;
}) {
  const { handleClick, onBook } = props;

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#212121",
      }}
    >
      <Container>
        <Box my={5}>
          <Typography fontSize={18} fontWeight={200} color="whitesmoke">
            Chariot Services
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "whitesmoke",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "whitesmoke",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} p={2}>
            <Stack direction="column" spacing={1}>
              {navLinks.map((link, idx) => (
                <Typography
                  key={idx}
                  fontSize={{ xs: 22, md: 30 }}
                  fontWeight={200}
                  color="whitesmoke"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick?.(link)}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} p={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: { xs: "200px", md: "100%" },
              }}
            >
              <Stack direction="column" spacing={2}>
                <Typography
                  fontSize={{ xs: 20, md: 25 }}
                  fontWeight={200}
                  color="whitesmoke"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, debitis!
                </Typography>
                <Box>
                  <Button variant="outlined" color="secondary" onClick={onBook}>
                    Book a ride
                  </Button>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography
                  color="whitesmoke"
                  fontSize={16}
                  fontWeight={200}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Instagram
                </Typography>
                <Typography
                  color="whitesmoke"
                  fontSize={16}
                  fontWeight={200}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  X
                </Typography>
                <Typography
                  color="whitesmoke"
                  fontSize={16}
                  fontWeight={200}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  LinkedIn
                </Typography>
                <Typography
                  color="whitesmoke"
                  fontSize={16}
                  fontWeight={200}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Facebook
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box my={5}>
          <Typography fontSize={14} fontWeight={200} color="whitesmoke">
            &copy; {new Date().getFullYear()} Chariot Services. All rights
            reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
