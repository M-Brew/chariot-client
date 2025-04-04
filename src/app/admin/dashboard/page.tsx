import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default async function AdminDashboard() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Dashboard</Typography>
    </Box>
  );
}
