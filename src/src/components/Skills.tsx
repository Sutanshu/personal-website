import { Box } from "@mui/material";
import WordCloud from "../WordCloud";

const Skills = () => {
  return (
    <Box
      //@ts-ignore
      sx={{
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
