import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";
import NavBar from "./Navbar";

const Memoji = (): JSX.Element => {
  return (
    <img
      src="memoji.png"
      alt="memoji"
      style={{ height: "250px", width: "250px" }}
    />
  );
};
const HomePage = (): JSX.Element => {
  return (
    <Box
      //@ts-ignore
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "normal",
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Memoji />
        <Box
          sx={{
            // backgroundColor: "black",
            paddingTop: "8%",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typewriter
            options={{
              strings: [
                '<strong>  <span style="font-size: 50px; color: white; backgroundColor: "black";> Hello, my name is </span> <span style="font-size: 50px; color: #3FC9ED;">Sutanshu Seth. </span> <span style="font-size: 50px; color: white;"> I am a </span> <span style="font-size: 50px; color: #3FC9ED;">Software Developer!</span></strong>',
              ],
              autoStart: true,
              loop: true,
              delay: 35,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default HomePage;
