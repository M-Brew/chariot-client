"use client";

import { use } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import SettingsNav from "@/admin-components/settings/SettingsNav";

export default function SettingsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { slug } = use(params);

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={3}>
        {matches && (
          <Grid size={3}>
            <SettingsNav slug={slug} />
          </Grid>
        )}
        <Grid size={matches ? 9 : 12}>{children}</Grid>
      </Grid>
    </Container>
  );
}
