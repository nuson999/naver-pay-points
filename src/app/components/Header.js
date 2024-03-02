"use client";

import { Box, Button, ButtonGroup, Grid, Sheet } from "@mui/joy";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import { GitHub } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";

function Header() {
  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText("https://npoint.pages.dev");
  };

  return (
    <Sheet color="neutral" variant="soft" sx={{ height: "100%", p: 4, borderRadius: "16px" }}>
      <Grid container spacing={3}>
        <Grid>
          <Box>
            <Typography level="h1" textColor="#03c75a" sx={{ display: "inline-block", backgroundColor: "white", paddingX: "10px", borderRadius: "10px", marginRight: "10px" }}>
              N
            </Typography>
            <Typography level="h1" sx={{ display: "inline-block" }}>
              Pay 적립 모음
            </Typography>
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              오늘 00:45 업데이트됨
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <ButtonGroup>
              <IconButton variant="soft" color="neutral" sx={{ backgroundColor: "#ececec" }} onClick={copyUrlToClipboard}>
                <ShareIcon />
              </IconButton>
              <IconButton component="a" target="_blank" href="https://github.com/nuson999" variant="soft" color="neutral" sx={{ backgroundColor: "#ececec" }}>
                <GitHub />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </Sheet>
  );
}

export default Header;
