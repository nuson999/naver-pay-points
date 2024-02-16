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
            <Typography level="h1">네이버 페이 포인트 링크</Typography>
            <Typography level="h5">00:45 업데이트됨</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Button variant="soft" href="https://github.com/eungangku" startDecorator={<GitHub />}>
              nuson999
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Sheet>
  );
}

export default Header;
