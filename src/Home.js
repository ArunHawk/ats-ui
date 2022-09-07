import "./App.css";
import MiniDrawer from "./component/ResponsiveDrawer";
import "@fontsource/montserrat";
import {theme} from './screen/employeeCss.js'
import { ThemeProvider } from "@mui/material";


function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <MiniDrawer />
    </ThemeProvider>

    </>
  );
}

export default Home;
