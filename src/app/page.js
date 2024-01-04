import styles from "./page.module.css";
import Header from "./components/Header";
import UrlList from "./components/UrlList.client";
import { Grid, Sheet } from "@mui/joy";

export default function Home() {
  return (
    <Sheet sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid sx={5}>
          <Header />
        </Grid>
        <Grid sx={7}>
          <UrlList />
        </Grid>
      </Grid>
    </Sheet>
  );
}
