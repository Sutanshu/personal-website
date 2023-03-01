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
            backgroundColor: "white",
            paddingTop: "8%",
            color: "black",
          }}
        >
          <Typewriter
            options={{
              strings: [
                '<strong>  <span style="font-size: 50px; color: black;"> Hello, my name is </span> <span style="font-size: 50px; color: #3FC9ED;">Sutanshu Seth. </span> <span style="font-size: 50px; color: black;"> I am a </span> <span style="font-size: 50px; color: #3FC9ED;">Software Developer!</span></strong>',
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
