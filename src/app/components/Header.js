import { Box, Button, Grid, Sheet } from "@mui/joy";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import { GitHub } from "@mui/icons-material";

function Header() {
  return (
    <Sheet color="neutral" variant="soft" sx={{ height: "100%", p: 4, borderRadius: "16px" }}>
      <Grid container spacing={3}>
        <Grid>
          <Box>
            <Typography level="h1">네이버 페이 적립 링크</Typography>
            <Typography level="h5">오늘 00:45 업데이트됨</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Button component="a" href="https://github.com/nuson999" variant="soft" startDecorator={<GitHub />}>
              nuson999
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Sheet>
  );
}

export default Header;
