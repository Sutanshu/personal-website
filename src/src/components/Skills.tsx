import { Box } from "@mui/material";
import WordCloud from "../WordCloud";

const Skills = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <Box
      //@ts-ignore
      sx={{
        paddingTop: isMobile ? "10vh" : "0vh",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >
      <h1 style={{ color: "black", fontSize: "40px" }}>A few skills</h1>
      <div
        style={{
          height: "100vh",
          width: "80vw",
        }}
      >
        <WordCloud />
      </div>
    </Box>
  );
};

export default Skills;
