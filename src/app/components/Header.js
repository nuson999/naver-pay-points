"use client";

import { Box, Button, ButtonGroup, Grid, Sheet } from "@mui/joy";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import { GitHub } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/joy/IconButton";

function Header() {
  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText("https://npoint.pages.dev");
  };

  return (
    <Sheet color="neutral" variant="soft" sx={{ height: "100%", p: 4, borderRadius: "16px" }}>
      <Grid container spacing={3}>
        <Grid>
          <Box>
            <Typography level="h1">네이버 페이 적립 모음</Typography>
            <Typography level="h5">오늘 00:45 업데이트됨</Typography>
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
